<?php
if (isset($_REQUEST["r"]) || isset($_REQUEST["g"]) || isset($_REQUEST["b"])) {
    implode(", ", $_REQUEST);

    //$rValue = isset($_REQUEST["r"]) ? $_REQUEST["r"]: 0;
    $rValue = $_REQUEST["r"];
    $gValue = $_REQUEST["g"];
    $bValue = $_REQUEST["b"];

    echo "$rValue,$gValue,$bValue";
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">

    <title>Color picker</title>
    <style>
        body {
            font-family: monospace;
        }

        .selectores {
            display: flex;
            justify-content: center;
            gap: 20px;
        }

        input {
            display: block;
            margin: 10px auto;
        }

        .box {
            border-radius: 10px;
            width: 200px;
            height: 80px;
        }

        .resultado {
            margin: 15px auto;
            width: calc((200px * 3) + 40px);
            height: 100px;
            border: 1px solid gray;
            border-radius: 10px;
        }

        .hexadecimal {
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid;
            margin: auto;
        }
    </style>
</head>

<body>
    <div class="contenedor">
        <div class="selectores">
            <div>
                <input type="range" id="rvalue" value="255" name="rvalue" min="0" max="255">

                <div class="box boxRvalue"></div>
            </div>
            <div>
                <input type="range" id="gvalue" value="255" name="gvalue" min="0" max="255">
                <div class="box boxGvalue"></div>
            </div>
            <div>
                <input type="range" id="bvalue" value="255" name="bvalue" min="0" max="255">
                <div class="box boxBvalue"></div>
            </div>
        </div>
        <div class="resultado">

        </div>
        <div class=" box hexadecimal">
        </div>
    </div>
    <script>
        const rValue = document.getElementById('rvalue')
        const gValue = document.getElementById('gvalue')
        const bValue = document.getElementById('bvalue')
        const boxRvalue = document.querySelector('.boxRvalue')
        boxRvalue.style.backgroundColor = `rgb(${rValue.value},0,0)`

        const boxGvalue = document.querySelector('.boxGvalue')
        boxGvalue.style.backgroundColor = `rgb(0,${gValue.value},0)`

        const boxBvalue = document.querySelector('.boxBvalue')
        boxBvalue.style.backgroundColor = `rgb(0,0,${bValue.value})`
        document.querySelector('.hexadecimal').textContent = ConvertRGBtoHex(parseInt(rValue.value), parseInt(gValue.value), parseInt(bValue.value));


        const boxResultado = document.querySelector('.resultado')
        rValue.addEventListener('change', (e) => {
            const color = e.target.value;
            console.log("r", color, "g", gValue.value, "b", bValue.value)

            boxRvalue.style.backgroundColor = `rgb(${color},0,0)`
            sendColor()
        })
        gValue.addEventListener('change', (e) => {
            const color = e.target.value;
            console.log("r", rValue.value, "g", color, "b", bValue.value)

            boxGvalue.style.backgroundColor = `rgb(0,${color},0)`
            sendColor()
        })
        bValue.addEventListener('change', (e) => {
            const color = e.target.value;
            console.log("b", color)

            boxBvalue.style.backgroundColor = `rgb(0,0,${color})`
            sendColor()
        })

        function ColorToHex(color) {
            let hexadecimal = color.toString(16);
            return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
        }

        function ConvertRGBtoHex(red, green, blue) {
            return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
        }

        function sendColor() {
            const rValue = document.getElementById('rvalue').value
            const gValue = document.getElementById('gvalue').value
            const bValue = document.getElementById('bvalue').value
            let xmlhttp = new XMLHttpRequest();
            console.log(xmlhttp);

            xmlhttp.onreadystatechange = function() {

                if (this.readyState == 4 && this.status == 200) {
                    document.querySelector('.resultado').style.backgroundColor = `rgb(${this.responseText})`;
                    let rgb = this.responseText.split(',')
                    document.querySelector('.hexadecimal').textContent = ConvertRGBtoHex(parseInt(rgb[0]), parseInt(rgb[1]), parseInt(rgb[2]));
                }
            };

            xmlhttp.open(
                "GET",
                `index.php?r=${rValue}&g=${gValue}&b=${bValue}`,
                true
            );
            xmlhttp.send();

        }
    </script>
</body>

</html>