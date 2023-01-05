<html>
    <body>
        <h1>Apparel Costs</h1>
        <ul>
            <?php
                $json = file_get_contents('http://prices-flask');
                $data = json_decode($json);
                foreach ($data as $item){
                    echo "<li>$item->name : $item->price </li>";
                }
                #$json2 = file_get_contents('http://back-end-apparel');
            ?>
</ul>

</body>
    </html>
