const data = [
    {
        name: "ABC",
        regno: "2021",
        IOT: "A",
        DBMS: "A",
        TOC: "C"
    },
    {
        name: "PQR",
        regno: "2021",
        IOT: "A",
        DBMS: "B",
        TOC: "A"
    },
    {
        name: "XYZ",
        regno: "2023",
        IOT: "A",
        DBMS: "B",
        TOC: "C"
    }
]

const results = document.getElementById('res')

const smBtn = document.getElementById('smt-btn')
smBtn.addEventListener("click", function () {
    const name = document.getElementById('name-box').value;
    for (let i = 0; i < data.length; i++) {
        if (data[i].name.toLowerCase() == name.toLowerCase()) {
            console.log(data[i].marks)
            results.innerHTML = "<h3>" + "IOT : " + data[i].IOT + "</h3>" + "<h3>" + "DBMS : "
                + data[i].DBMS + "</h3>" + "<h3>" + "TOC: " + data[i].TOC + "</h3>"
            return;
        }
    }
    results.innerHTML = "<h1>" + "Not available" + "</h1>"
})