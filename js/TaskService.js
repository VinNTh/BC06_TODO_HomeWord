function TaskService() {

    this.layDanhSachTaskService = function() {
        /**
         * axios trả về đối tượng Promise: Có 3 trạng thái
         *  - pending: Thời gian chờ
         *  - resolve: Thành công (then)
         *  - reject: Thất bại (catch)
         */
        return axios({
            url: "https://6044315ba20ace001728eb6e.mockapi.io/api/Task",
            method: "GET",
        });

    };
    this.themDanhSachTaskService = function(user) {
        return axios({
            url: "https://6044315ba20ace001728eb6e.mockapi.io/api/Task",
            method: "POST",
            data: user,
        });
    };
    this.xoaDanhSachTaskService = function(id) {
        return axios({
            url: "https://6044315ba20ace001728eb6e.mockapi.io/api/Task/" + id,
            method: "DELETE",
        });
    };
    this.changeDanhSachTaskService = function(id) {
        return axios({
            url: "https://6044315ba20ace001728eb6e.mockapi.io/api/Task/" + id,
            methos: "PUT"
        })
    };

};