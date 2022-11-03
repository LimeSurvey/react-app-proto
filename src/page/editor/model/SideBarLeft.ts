export default class SideBarLeft
{
   public open: boolean

    constructor(data?:Partial<SideBarLeft>)
    {
        // Defaults
        this.open = true

        // Initialise from arg data
        if (data) {
            Object.assign(this, data)
        }
    }

    /**
     * Is Open
     *
     * @returns boolean
     */
    public isOpen()
    {
        return !!this.open;
    }

    /**
     * Toggle Open
     *
     * A trivial example of how object state mutations can
     * be encapsulated into a class.
     *
     * @returns void
     */
    public toggleOpen()
    {
        return this.open = !this.isOpen();
    }
}
