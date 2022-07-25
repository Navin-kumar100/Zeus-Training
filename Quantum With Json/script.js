var Allcart = document.querySelector(".allcart");
var data = fetch('./coursedata.json')
    .then(function (res) { return res.json(); })
    .then(function (course) {
    console.log(course);
    var alldata = "";
    for (var _i = 0, _a = course.course; _i < _a.length; _i++) {
        var obj = _a[_i];
        alldata += "<div class=\"card\">\n      <span class=\"expire1 ".concat(obj.expire, "\">EXPIRED</span>\n                 <div class=\"upper\">\n                    <img class=\"card-img\" src=").concat(obj.images, " alt=\"cardimg\">\n                    <div class=\"card-content\">\n                          <div class=\"acc\">\n                          <div class=\"h2-cart\">").concat(obj.name, "</div>\n                          <img src=\"/Images/icons/favourite.svg\" alt=\"favourite\">\n                          </div>\n    \n                    <p class=\"p-subject\">").concat(obj.subject, " <span> | </span> ").concat(obj.grade, "  <span class=\"extra-grade\">+").concat(obj.extragrade, "</span></p>\n                    <p class=\"p-unit\"><span class=\"span-unit\"> <b>").concat(obj.Units, "</b> </span>Units <span\n                    class=\"span-less\">").concat(obj.Lessons, " </span>Lessons<span class=\"span-topic\">").concat(obj.Topics, " </span>\n                    Topics </p>\n                    <select class=\"coursesname\" name=\"coursesname\">\n                      <option value=\"\">").concat(obj.classs, "</option>\n                   </select>\n                   <p class=\"p-students\"> ").concat(obj.Students, " <span class=\"span-date\">|</span> ").concat(obj.date, " </p>\n                </div>\n                </div>\n                <hr/>\n    \n                <div class=\"lowerdiv\">\n                \n                <img  src=\"/Images/icons/preview.svg\" alt=\"preview\">\n                <img  class=\"").concat(obj.desible, "\" src=\"/Images/icons/managecourse.svg\" alt=\"ds\">\n                <img class=\"").concat(obj.desible, "\" src=\"/Images/icons/grade-submissions.svg\" alt=\"submissions\">\n                <img src=\"/Images/icons/reports.svg\" alt=\"report\">\n                </div>\n                \n    </div>");
    }
    Allcart.innerHTML = alldata;
});
// const course: {
//   name: string;
//   subject: string;
//   grade: string;
//   extragrade: number;
//   Units: number;
//   Lessons: number;
//   Topics: number;
//   classs: string;
//   images: string;
//   Students: string;
//   date: string;
// }[] = [
//   {
//     name: "Acceleration",
//     subject: "Physics",
//     grade: "Grade 7",
//     extragrade: 2,
//     Units: 7,
//     Lessons: 23,
//     Topics: 41,
//     classs: "Mr. Frank's Class A",
//     images: "/Images/images/imageMask-1.svg",
//     Students: "76 Students",
//     date: "21-Jan-2020 - 21-Aug-2020",
//   },
//   {
//     name: "Displacement, Velocity and Speed",
//     subject: "Physics",
//     grade: "Grade 4",
//     extragrade: 3,
//     Units: 7,
//     Lessons: 14,
//     Topics: 42,
//     classs: "No Classes",
//     images: "/Images/images/imageMask-2.svg",
//     Students: "",
//     date: "02-Mar-2020 - 30-Aug-2022",
//   },
//   {
//     name: "Introduction to Biology: Micro organisms and how they affec...",
//     subject: "Biology",
//     grade: "Grade 4",
//     extragrade: 2,
//     Units: 3,
//     Lessons: 4,
//     Topics: 22,
//     classs: "All Classes",
//     images: "/Images/images/imageMask-3.svg",
//     Students: "26 Students",
//     date: "26-Feb-2020 - 12-Aug-2022",
//   },
//   {
//     name: "Introduction to High School Mathematics",
//     subject: "Mathematics",
//     grade: "Grade 7",
//     extragrade: 2,
//     Units: 6,
//     Lessons: 32,
//     Topics: 15,
//     classs: "Mr. Frank's Class B",
//     images: "/Images/images/imageMask.svg",
//     Students: "36 Students",
//     date: "30-Jan-2020 - 04-Aug-2020",
//   },
// ];
