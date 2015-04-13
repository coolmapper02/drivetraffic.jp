{
    "moduleId" : "coolmapper02/drivetraffic.jp",
    "title" : "driveTraffic.jp",
    "subtitle" : "www.drivetraffic.jp",
    
    "backButton" : true,
    "enableGPS" : false,
    "zoomControl" : false,
    "screenLockRot" : false,
    "reload" : false,
    
    "shouldOverrideUrlLoading1" : "http://www.drivetraffic.jp",
    "shouldOverrideUrlLoading2" : "https://www.drivetraffic.jp",

    "loadDataWithBaseUrl1" : "http://www.drivetraffic.jp/smp/",
    
    "loadDataWithBaseUrl3" : "text/html",
    "loadDataWithBaseUrl4" : "utf-8",
    "loadDataWithBaseUrl5" : null,
			
    "browserLaunchLink" : "http://www.drivetraffic.jp/smp/realtime_map.html",
    
    "loadDataWithBaseUrl2" : "
<!DOCTYPE html>
<html>
<head>
<meta charset='Shift_JIS'><lang='ja'><title>.</title>
<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js'></script>
<script type='text/javascript'>

window.loadPage = function (url) {
    $.get(url, function(page) {
        newPage = page.replace('<\\/script>', '<\\/script> <script> pos = { coords: {latitude:#lat#, longitude:#lng#} , speed:5 }; navigator.geolocation.getCurrentPosition = function( cbOK, cbERR ) { cbOK(pos) }; <\\/script>');
        newNewPage = newPage.replace('<title>', '<script> setTimeout(function() {_mapAdmin.map.setZoom( Math.round( (#zoomD# - 7.0) *8 / 7)); },2000 );<\\/script> <title>');
        var newDoc = document.open();
        newDoc.write(newNewPage);
        newDoc.close();
    });
};

loadPage('http://www.drivetraffic.jp/smp/realtime_map.html');

</script>

</head>
<body>
<h1>.</h1>
</body>
</html>
    "
}
