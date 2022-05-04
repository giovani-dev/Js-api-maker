
export default interface IView<T, O> {
    handle(data: T): Promise<O>;
}
