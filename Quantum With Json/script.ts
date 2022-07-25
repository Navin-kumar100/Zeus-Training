const Allcart: any = document.querySelector(".allcart");

const data:any=fetch('./coursedata.json')
.then(res=>res.json())
.then(course=>
  {
   console.log(course);
    let alldata: string = "";
    for (let obj of course.course) {
     
      alldata += `<div class="card">
      <span class="expire1 ${obj.expire}">EXPIRED</span>
                 <div class="upper">
                    <img class="card-img" src=${obj.images} alt="cardimg">
                    <div class="card-content">
                          <div class="acc">
                          <div class="h2-cart">${obj.name}</div>
                          <img src="/Images/icons/favourite.svg" alt="favourite">
                          </div>
    
                    <p class="p-subject">${obj.subject} <span> | </span> ${obj.grade}  <span class="extra-grade">+${obj.extragrade}</span></p>
                    <p class="p-unit"><span class="span-unit"> <b>${obj.Units}</b> </span>Units <span
                    class="span-less">${obj.Lessons} </span>Lessons<span class="span-topic">${obj.Topics} </span>
                    Topics </p>
                    <select class="coursesname" name="coursesname">
                      <option value="">${obj.classs}</option>
                   </select>
                   <p class="p-students"> ${obj.Students} <span class="span-date">|</span> ${obj.date} </p>
                </div>
                </div>
                <hr/>
    
                <div class="lowerdiv">
                
                <img  src="/Images/icons/preview.svg" alt="preview">
                <img  class="${obj.desible}" src="/Images/icons/managecourse.svg" alt="ds">
                <img class="${obj.desible}" src="/Images/icons/grade-submissions.svg" alt="submissions">
                <img src="/Images/icons/reports.svg" alt="report">
                </div>
                
    </div>`;

    }
    Allcart.innerHTML = alldata;
    
  }
  );


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


