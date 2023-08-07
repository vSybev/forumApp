export class Theme {
    constructor(
        public header: string,
        public creator: string,
        public id: number,
        public date: string,
        public lastComent?: string,
        public numberOfComents?: number,
    ) {}
}