/***
 * class ToDo
 */
class ToDO{
    #title;
    #description;
    #dueDate;
    #dateCompleted;
    #id;
    /***
     * @constructor
     * @param {string} title
     * @param {string} description
     * @param {string} dueDate
     * @param {date} dateCompleted
    */
    constructor(id,title,description,dueDate){
        this.#id = id;
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#dateCompleted = null;
    }
}