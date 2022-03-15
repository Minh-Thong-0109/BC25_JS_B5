function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

document.getElementById("xet__tuyen").onclick = function () {
  var ht = document.getElementById("ht").value;
  var mon1 = document.getElementById("mon__1").value * 1;
  var mon2 = document.getElementById("mon__2").value * 1;
  var mon3 = document.getElementById("mon__3").value * 1;
  var kv = document.getElementById("khu__vuc").value * 1;
  var dt = document.getElementById("doi__tuong").value * 1;
  var dc = document.getElementById("diem__chuan").value * 1;
  var tong = mon1 + mon2 + mon3 + kv + dt;
  if (
    ht == "" ||
    mon1 > 10 ||
    mon1 <= 0 ||
    mon2 > 10 ||
    mon2 <= 0 ||
    mon3 <= 0 ||
    mon3 > 10 ||
    dc > 34.5 ||
    dc <= 0
  ) {
    document.getElementById("ket__qua__xet").innerHTML =
      "<div class='alert alert-danger'>Vui lòng kiểm tra lại các thông số nhập</div>";
  } else if (tong < dc || mon1 * mon2 * mon3 == 0) {
    var kq = "Trượt nguyện vọng";
    document.getElementById("ket__qua__xet").innerHTML =
      "<div class='alert alert-danger'><p>Thí sinh: <b>" +
      ht +
      "</b></p><p>Tổng điểm thi: <b>" +
      tong +
      "</b></p><p>Kết quả: <b>" +
      kq +
      "</b></div>";
  } else {
    var kq = "Trúng tuyển";
    document.getElementById("ket__qua__xet").innerHTML =
      "<div class='alert alert-success'><p>Thí sinh: <b>" +
      ht +
      "</b></p><p>Tổng điểm thi: <b>" +
      tong +
      "</b></p><p>Kết quả: <b>" +
      kq +
      "</b></div>";
  }
};

document.getElementById("tinh__toan").onclick = function () {
  var hvt = document.getElementById("hvt").value;
  var kw = document.getElementById("kw").value * 1;
  var cl = 0;
  var tt = 0;
  if (kw > 50) {
    tt = 50 * 500;
    cl = kw - 50;
  } else {
    tt = kw * 500;
    cl = 0;
  }
  if (cl > 0 && cl > 50) {
    tt = tt + 50 * 650;
    cl = cl - 50;
  } else {
    tt = tt + cl * 650;
    cl = 0;
  }
  if (cl > 0 && cl > 100) {
    tt = tt + 100 * 850;
    cl = cl - 100;
  } else {
    tt = tt + cl * 850;
    cl = 0;
  }
  if (cl > 0 && cl > 150) {
    tt = tt + 150 * 1100;
    cl = cl - 150;
  } else {
    tt = tt + cl * 1100;
    cl = 0;
  }
  if (cl > 0) {
    tt = tt + cl * 1300;
  } else {
    tt = tt;
    cl = 0;
  }
  (kw <= 0 || hvt=="")?document.getElementById("thanh__toan").innerHTML = "<div class='alert alert-danger'>Vui lòng kiểm tra lại các thông số nhập</div>":
  document.getElementById("thanh__toan").innerHTML ="<div class='alert alert-success'>Số tiền thanh toán: <b>"+numberWithCommas(tt)+"đ</b></div>";
};
