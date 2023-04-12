export default {
    plus: "Income",
    less: "Expense",
    descriptionPlaceHolder: "Add a description",
    numberPlaceHolder: "$ (Number)",
    save: "Save",


    show(){
        document.querySelector(".middle").insertAdjacentHTML("beforeend",
        `
        <div class="container">
            <div class="row">
                <div class="col-2 col-xs-6">
                    <select class="text-center form-select width-input" aria-label="Default select example" id="selectValue">
                        <option id="optionNone">Option</option>
                        <option value="plus" id="plus">${this.plus}</option>
                        <option value="less" id="less">${this.less}</option>
                    </select>
                </div>
                <div class="col-4 col-xs-6">
                    <input required type="text" placeholder=${this.descriptionPlaceHolder} name="description" class="width-input text-center" id="description">
                </div>
                <div class="col-4 col-xs-6">
                    <input required type="text" placeholder=${this.numberPlaceHolder} name="price" class="width-input text-center" id="price">
                </div>
                <div class="col-2 col-xs-6">
                    <button type="submit" name="send" class="width-input btn text-center sendBtn" id="send">${this.save}</button>
                </div>
            </div>
        </div>
        `
        )
    }
}