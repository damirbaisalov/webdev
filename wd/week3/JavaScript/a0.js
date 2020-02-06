let tasker = {
    selectElements: function(){
        this.taskInput = document.getElementById("input-task");
        this.taskList = document.getElementById("tasks");
        this.taskListChildren = this.taskList.children;
        this.addButton = document.getElementById("add-task-btn");
        this.errorMessage = document.getElementById("error");
    },
    buildTask: function(){
        let taskListItem, taskCheckbox, taskValue, taskButton, taskTrash;
        taskListItem = document.createElement("li");
        taskListItem.setAttribute("class", "task");
        //checkbox
        taskCheckbox = document.createElement("input");
        taskCheckbox.setAttribute("type", "checkbox");
        //task value
        taskValue = document.createTextNode(this.taskInput.value);
        //delete icon
        taskTrash = document.createElement("i");
        taskTrash.setAttribute("class", "fa fa-trash");
        //insert trash can icon into button
        taskButton.appendChild(taskTrash);

        //append eLements to taskList
        taskListItem.appendChild(taskCheckbox);
        taskListItem.appendChild(taskvalue);
        taskListItem.appendChild(taskButton);

        this.taskList.appendChild(taskListItem);
    }
};