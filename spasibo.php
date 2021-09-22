<?php 
//include 'bx24.php';
$imail="aa38.ru@yandex.ru"; //Email (можно через запятую - email1, email2, email3)
$ireply=""; //Email для ответа (нажимая на ''отправить'' клиент отправит сообщение на этот email)
$tiny_text="спасибо за вашу заявку, мы свяжемся с вами в ближайшее время."; //Благодарность
$ntimer=""; //Таймер возврата на главную, в секундах - после успешного заказа, по истичению заданного времени заказчика перекинет на главную страницу
$kod_kod=""; //Скрипты
?>
<!DOCTYPE HTML>
<html style="height: 100%; font-family: 'Lato', Calibri, Arial, sans-serif;">
<head>
  <meta http-equiv="content-type" content="text/html" />
  <meta name="author" content="smok003" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <meta name="viewport" content="width=device-width, user-scalable=false"/>
  <?=$ntimer > ' ' ? '<meta http-equiv="refresh" content="' . $ntimer . '; url=/">' : ''?>

<?php

if (
    ( isset($_POST['phone']) ) || 
    ( isset($_POST['tel'])   )
) {

  $message = '';
  $message_2 = '';
  $client = '';

  $phone = $_POST["tel"];
  $email = $_POST['email'];
  unset($_POST["tel"]);

  $utm_source    = $_POST['utm_source'];
  $utm_medium    = $_POST['utm_medium'];
  $utm_campaign  = $_POST['utm_campaign'];
  $utm_content   = $_POST['utm_content'];
  $utm_term      = $_POST['utm_term'];
  

  $post = array(
    'имя'     => 'Имя: ',           'name'   => 'Имя: ',
    'tel'     => 'Телефон: ',       'phone'  => 'Телефон: ',       'contact'    => 'Контакты: ',
    'skype'   => 'Скайп: ',         'fb'     => 'Фейсбук: ',       'vk'         => 'Вконтакте: ',
    'mail'    => 'Email: ',         'email'  => 'Email: ',

    /* стандартные доп поля */
    'notes'   => 'Комментарий: ',   'note'   => 'Комментарий: ',   'comment'    => 'Комментарий: ',
    'square' => 'Площадь: ',
    'where_own_variable'   => 'Где делать стяжку (свой вариант): ',         'adress' => 'Адрес: ',         'address'    => 'Адрес: ',     'addr'  => 'Адрес: ',
    'where'=> 'Где делать стяжку: ',
    'add'     => 'Дополнительно: ', 'dop'    => 'Дополнительно: ', 'additional' => 'Дополнительно: ',
    'credit'    => 'Программы рассрочки: ',          'messenger'   => 'Мессенджер: ',          'price'      => 'Стоимость: ', 'ornament' => 'Орнамент: ',
    'subject' => 'Тема: ',          'theme'  => 'Тема: ',
    'osnovanie'   => 'Основание: ',
    'osnovanie_own_variable'   => 'Основание (свой вариант): ',
    'message' => 'Сообщение: ',
    'planirovka'     => 'Планировка: ',
    'style' => 'Стиль: ',
    'own_variable_naznachenie' => 'Назначение (свой вариант): ',

    /* свойства обьектов */
    'svet'      => 'Освещение: ',      'width'   => 'Ширина: ',       'height'     => 'Высота: ',    'length'  => 'Длинна: ',
    'planirovki'     => 'Планировки: ',        'format'  => 'Формат: ',
    'ornament_not_like'      => 'Ни один орнамент не нравится: ',         'kanalizaciya'    => 'Канализация: ',      
    'svet_not_like'    => 'Ни одни лампы не нравятся: ',         'osobenost'  => 'Особенность: ',          'wt'         => 'Вес: ',
    'otdelka'    => 'Чаша и отделка: ',      'shape'   => 'Фигура: ',
    'structure' => 'Структура: ',   'pattern' => 'Структура: ',    'texture'    => 'Структура: ',
    'design'    => 'Дизайн: ',      'floor' => 'Тёплый пол: ',
    'dop'    => 'Доп. услуги: ',    'img'     => 'Картинка: ',
    'dop_own_variable'  => 'Доп. услуги (свой вариант): ',     'ref'     => 'Реферал: ',
    'title'     => 'Заголовок (название): ',
    'type'      => 'Тип: ',
    'forma'     => 'Форма: ',
    'question'  => 'Вопрос: ',
    'time'      => 'Время звонка: '
  );

function frarr($arr){
  global $post;

  $r = '';
  foreach ($arr as $k => $v) {
    if (is_array($v))
      $r .= frarr($v);
    else
      $r .= ( $post[$k] ? $post[$k] : ($k . ': ') ) . $v . PHP_EOL;
  }

  return $r;
}

  foreach ($_POST as $key => $value) {
    if (is_array($value)) {
      $message .= ( $post[$key] ? $post[$key] : ($key . ': ') )  . PHP_EOL;
      $message .= frarr($value);
      $message .= PHP_EOL;
    } else
      $message .= ( $post[$key] ? $post[$key] : ($key . ': ') ) . $value . PHP_EOL;
  }

  // unset($_POST["email"]);
  // unset($_POST['utm_source']);
  // unset($_POST['utm_medium']);
  // unset($_POST['utm_campaign']);
  // unset($_POST['utm_content']);
  // unset($_POST['utm_term']);
  
  foreach ($_POST as $key => $value) {
    if (is_array($value)) {
      $message_2 .=  ( $post[$key] ? $post[$key] : ($key . ': ') )  . "\n";
      $message_2 .= implode(" | ",$value);
      $message_2 .= "\n";

    } else
      $message_2 .= ( $post[$key] ? $post[$key] : ($key . ': ') ) . $value . "\n";
  }
  
  $header = 'Content-type: text/plain; charset=UTF-8' . PHP_EOL . 
            'From: ' . $imail . PHP_EOL . 
            'MIME-Version: 1.0'. PHP_EOL;

  $title = 'Заявка с сайта ' . 'простяжка.рф';

 

  if (!$imail) { 
// сообщение не отправилось
    $thisfile = pathinfo($_SERVER['PHP_SELF']); ?>

      <title>Ошибка отправки</title>
    </head>
    <body>
      <div style="width:980px;max-width:100%;margin:0 auto;text-align:center;">
        <h1> Ошибка отправки! </h1> 
        <h2>Email не задан, некуда отправить заявку</h2>

        Вверху файла <strong><?= $thisfile['basename'] ?></strong> найдите строку <strong>$imail=""</strong> и впишите ваш email в кавычках<br/>
        пример: <strong>$imail="<b>email@mail.ru</b>"</strong>
        <br/>
        <br/>

        <h2>Содержимое текущей заявки:</h2>
        <div class="mail"><?= (preg_replace("/\n/i", "<br>", $message)) ?></div>
      </div>
      <style>
        html{background-color: #EAC5C5;} b{color:#f00;}
        .mail{display: inline-block; margin: 0 auto; text-align: left; border: 3px solid #fff9; padding: 10px 25px;}
    h2{margin-bottom: 10px;}
      </style>
    </body>
    </html>

  <?php die; }

  if ( true ) {

   mail("aa38.ru@yandex.ru", $title, $message_2, $header);
   mail("sergeykozin1@gmail.com", $title, $message_2, $header);
   
//Успешная заявка 
  ?> 

    <title>Спасибо за заявку!</title></head><body>
      <div class="outer-wrap" style="top: 40%;">
        <div class="container">
          <p id="info" ><?=$client . ' ' . $tiny_text;?></p>
        </div>
       </div>
    <style>
      html{background-image: linear-gradient(to top, #D1F0D1 0%, #fff 50%, #D1F0D1 100%); background-color: #D1F0D1;}
      #info::first-letter{text-transform: uppercase;}
    </style> 

  <?php } else {
// Ошибка отправки ф-цией mail() 
  ?>

    <title>Ошибка отправки!</title></head><body>
      <div class="outer-wrap">
        <div class="container">
          <p id="info">Ошибка отправки заказа!<br/><span>Если вы видите это сообщение при попытке оформить заказ - свяжитесь с нами, для уточнения статуса заказа.</span><br /><br /><a href=".">На главную</a></p>
        </div>
      </div>
    <style>
      html{background-image: linear-gradient(to top, #EAC5C5 0%, #FFF 50%, #EAC5C5 100%); background-color: #EAC5C5;}
    </style>

  <?php }

} else {
// Не указан обязательный парамерт отправки (напр. телефон) 
?>

  <title>Ошибка оформления заказа!</title></head><body>
    <div class="outer-wrap">
      <div class="container">
        <p id="info">Ошибка оформления заказа!<br/><span>Скорее всего, вы просто открыли эту страницу в браузере, вернитесь на главную и попробуйте сделать заказ.</span><br /><br /><a href=".">На главную</a></p>
      </div>
    </div>
  <style>
    html{background-image: linear-gradient(to top, #F0E7E7 0%, #FFF 50%, #F0E7E7 100%); background-color: #FFE4E4;}
  </style>
<?php } ?>
<!-- метрика, аналитика -->
<?=$kod_kod?>

<style>
  #info {font-size: 1em; vertical-align: middle;}
  #info span {color: gray; font-size:0.8em;}
  .container{width: 95%;}
  body{margin: 0;}
  .container{margin: 0px auto; text-align: center; display: block; bottom: 0%; left: 0%;}
  .outer-wrap{top: 40%; position: absolute; width:100%;}
  @media (min-width: 1920px){body{font-size:24px;}}
  @media (max-width: 1920px){body{font-size:22px;}}
  @media (max-width: 1366px){body{font-size:20px;}}
  @media (max-width: 1024px){body{font-size:18px;}}
</style>
<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(66113440, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/66113440" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
</body>
</html>