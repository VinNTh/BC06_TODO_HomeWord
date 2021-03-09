var service = new TaskService();

function getEle(id) {
    return document.getElementById(id);
}

layDanhSachTask();

function layDanhSachTask() {
    service.layDanhSachTaskService()
        .then(function(result) {
            console.log(result.data);
            taoBang(result.data);
        })
        .catch(function(err) {
            console.log(err);
        })
};

function taoBang(arr) {
    var content = "";
    for (var i = 0; i < arr.length; i++) {
        content += `
        <li>
            <span>${arr[i].taskText}</span>
            <div class="buttons">
                <button class"remove" onclick="xoaTask(${arr[i].id})">
                    <i class="fa fa-trash-alt"></i>
                </button>
                <button class"complete" onclick="changeTask(${arr[i].id})">
                    <i class="far fa-check-circle"></i>
                </button>
            </div>
        </li>
        `
    }
    getEle("todo").innerHTML = content;
    var recycleBin = document.getElementsByClassName("fa");
    for (var i = 0; i < recycleBin.length; i++) {
        recycleBin[i].classList += " recycle";
    }

    var check = document.getElementsByClassName("far");
    for (var i = 0; i < check.length; i++) {
        check[i].classList += " check";
    }
};

function taoBangEdit(arr) {
    var content = "";
    for (var i = 0; i < arr.length; i++) {
        content += `
        <li>
            <span>${arr[i].taskText}</span>
            <div class="buttons">
                <button class"remove" onclick="xoaTask(${arr[i].id})">
                    <i class="fa fa-trash-alt"></i>
                </button>
                <button class"complete" onclick="changeTask(${arr[i].id})">
                    <i class="far fa-check-circle"></i>
                </button>
            </div>
        </li>
        `
    }
    getEle("completed").innerHTML = content;
    var recycleBin = document.getElementsByClassName("fa");
    for (var i = 0; i < recycleBin.length; i++) {
        recycleBin[i].classList += " recycle";
    }

    var check = document.getElementsByClassName("far");
    for (var i = 0; i < check.length; i++) {
        check[i].classList += " check";
    }
};


/**
 * Thêm task
 */
function addItemOne() {

    //DOM lấy giá trị người dùng nhập vào
    var _taskText = getEle("newTask").value;
    if (_taskText === "") {
        alert("Task empty");
    } else {
        //Tạo đối tượng từ task từ lớp đối tượng Task
        var task = new Task("", _taskText);

        console.log(task);

        service.themDanhSachTaskService(task)
            .then(function(result) {
                alert("Add User Success");
                layDanhSachTask();
            })
            .catch(function(err) {
                console.log(err);
            });
    };

};

/**
 * Xoá task
 */

function xoaTask(id) {
    service.xoaDanhSachTaskService(id)
        .then(function(result) {
            console.log(result.data);
            alert("Delete Success");
            layDanhSachTask();
        })
        .catch(function(err) {
            console.log(err);
        });
};

/**
 * Thay đổi task
 */
function changeTask(id) {
    service.changeDanhSachTaskService(id)
        .then(function(result) {
            alert("Changed success");
            console.log(result.data);
            taoBangEdit(result.data);
        })
        .catch(function(err) {
            console.log(err);
        })

};