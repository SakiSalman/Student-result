const student_form = document.getElementById('student-add');
const data_list = document.getElementById('data-list');


student_form.addEventListener('submit', function(e){

        e.preventDefault();

        const nam = student_form.querySelector('input[placeholder="Student Name"]');
        const roll = student_form.querySelector('input[placeholder="Student Roll"]');
        const class_Name = student_form.querySelector('input[placeholder="Class Name"]');
        const photo = student_form.querySelector('input[placeholder="Photo"]');
        const gender = student_form.querySelector('input[type="radio"]:checked');
        const ban = student_form.querySelector('input[placeholder="Photo"]');
        const eng = student_form.querySelector('input[placeholder="English"]');
        const math = student_form.querySelector('input[placeholder="Math"]');
        const science = student_form.querySelector('input[placeholder="Science"]');
        const socialscience = student_form.querySelector('input[placeholder="Social Science"]');
        const rel = student_form.querySelector('input[placeholder="Regligion"]');


        if (nam.value == '' || roll.value == '') {

            alert('X');
            
        } else {
            
            let student_arr = [];

            if(getData('resutl')){

                student_arr = getData('resutl');

            }


                student_arr.push({
                    name : nam.value,
                    roll : roll.value,
                    class_Name : class_Name.value,
                    photo : photo.value,
                    gender : gender.value,
                    ban : ban.value,
                    eng : eng.value,
                    math : math.value,
                    science : science.value,
                    socialscience : socialscience.value,
                    rel : rel.value
                })


              sendData('resutl', student_arr);

            




        }
        alldata()

});


alldata();
function alldata(){

    let student_arr = getData('resutl');

    let data = '';
    student_arr.map((student, index)=>{
        data +=`
        <tr>
        <td>${index + 1}</td>
        <td>${student.name}</td>
        <td>${student.roll}</td>
        <td>${student.class_Name}</td>
        <td>${student.gender}</td>
        <td>A</td>
        <td><img class="image-id" src="${student.photo}" alt=""></td>
        <td>
            <button class="btn-sm btn-info" onclick="viewPage(${index})" data-bs-toggle="modal" data-bs-target="#moadal_view">View</button>
            <button onclick="delateData(${index})" class="btn-sm btn-danger">Delate</button>
        </td>
    </tr> 
   
        `

    })

    data_list.innerHTML = data;

}


function delateData(index){

    let arr = getData('resutl');
    arr.splice(index, 1);
    sendData('resutl', arr);
    alldata();
}

const modal = document.getElementById('moadal_view');
function viewPage(index) {
    
    let data = getData('resutl');

    modal.innerHTML =`
    <div class="modal-dialog modal-lg">
    <div class="modal-content">
        <div class="modal-body">
            <div class="row">
                <div class="col-4">
                    <img class="w-100" src="${data[index].photo}" alt="">
                </div>
                <div class="col-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, a. Mollitia ipsa corporis id molestiae similique. Repudiandae deleniti consectetur earum illo voluptatibus rerum alias aperiam? Quae, laborum voluptatem labore quasi nam recusandae natus? Nobis cum sit veniam nesciunt itaque ab libero iste beatae, quia omnis? Animi perferendis magni iste consequatur.
                </div>
            </div>
          </div>
    </div>
</div>
    
    
    `




    
}
