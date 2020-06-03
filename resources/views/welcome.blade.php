<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Laravel_reactjs</title>
    <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
    <link href="{{asset('css/project.css')}}" rel="stylesheet" type="text/css">
    <link href="{{asset('css/font-awesome.css')}}" rel="stylesheet" type="text/css">
    <link href="{{asset('css/nivoslider/themes/default/default.css')}}" rel="stylesheet" type="text/css">
    <link href="{{asset('css/nivoslider/nivo-slider.css')}}" rel="stylesheet" type="text/css">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" rel="stylesheet">
</head>
<body>
    <div id="example"></div>
    <script src="{{asset('js/app.js')}}" ></script>
    <script src="{{asset('js/all.js')}}" ></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="{{asset('js/jquery.nivo.slider.js')}}"></script>
    <script src="{{asset('js/index.js')}}"></script>
</body>
</html>
