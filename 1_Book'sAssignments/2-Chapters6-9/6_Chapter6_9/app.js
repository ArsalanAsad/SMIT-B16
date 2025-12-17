function showResult() {
    let sub1 = document.getElementById("sub1").value;
    let sub2 = document.getElementById("sub2").value;
    let sub3 = document.getElementById("sub3").value;

    let m1 = Number(document.getElementById("m1").value);
    let m2 = Number(document.getElementById("m2").value);
    let m3 = Number(document.getElementById("m3").value);

    //fill table
    document.getElementById("s1").innerText = sub1;
    document.getElementById("s2").innerText = sub2;
    document.getElementById("s3").innerText = sub3;

    document.getElementById("o1").innerText = m1;
    document.getElementById("o2").innerText = m2;
    document.getElementById("o3").innerText = m3;

    document.getElementById("p1").innerText = Math.round((m1 / 100) * 100) + "%";
    document.getElementById("p2").innerText = Math.round((m2 / 100) * 100) + "%";
    document.getElementById("p3").innerText = Math.round((m3 / 100) * 100) + "%";

    //total row
    let totalMarks = 300;
    let obtainedMarks = m1 + m2 + m3;
    let percentTotal = Math.round((obtainedMarks / 300) * 100);

    document.getElementById("totMarks").innerText = totalMarks;
    document.getElementById("totObt").innerText = obtainedMarks;
    document.getElementById("totPerc").innerText = percentTotal + "%";

    document.getElementById("resultTable").style.display = "table";
}