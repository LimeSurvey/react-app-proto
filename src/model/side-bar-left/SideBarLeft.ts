
export default class SideBarLeft {

    open: boolean

    constructor(data?:Partial<SideBarLeft>) {

        this.open = true

        if (data) {
            Object.assign(this, data)
        }
    }

    public isOpen()
    {
        return this.open === true;
    }

    public toggleOpen()
    {
        return this.open = !this.open;
    }
}
