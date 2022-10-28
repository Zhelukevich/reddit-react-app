import React from "react";


// React.useEffect()
export function MyHook1({ title, id }: { title: string, id?: string }) {
    React.useEffect(() => {
        console.log('componentDidMount'); //срабатывает каждый раз при вводе текста в инпут
        console.log('componentWillUpdate');
    });//при отсутствии второго аргумента будет срабатывать при первом вызове и всех последующих

    React.useEffect(() => {
        console.log('componentDidMount');
    }, []);//будем следить "незачем" => [undefined] сработает при первом вызове всё

    React.useEffect(() => {
        console.log('componentWillReceiveProps: ', title);//сработывает каждый раз при изменении свойства title
    }, [title]);//будет срабатывать при первом вызове(так как title меняется с никакого) и при каждом последующем изменении title, если title не изменился, то функция вызвана не будет

    // ещё мы можем вернуть функцию
    React.useEffect(() => {
        console.log('componentDidMount');//срабатывает 1 раз 
        return () => {
            console.log('componentWillUnmount');//Срабатывает при закрытии
        }
    }, []);

    return (
        <div>{title} {id}</div>
    )
}

// useIsMount (классно использовать на клиенте хуки не работают на сервере возвращают только начальные значения)
export function MyHook2({ title, id }: { title: string, id?: string }) {
    const [isMounted] = useIsMounted();

    // if([isMounted]) {            //так работать не будет, правильная реализация ниже
    //     React.useEffect(() => {
    //         console.log('isMounted', isMounted);

    //     })
    // }

    React.useEffect(() => {
        console.log('isMounted', isMounted);

    }, [isMounted])

    return (
        <div>{title} {id}</div>
    )
}

function useIsMounted() {
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true)
    }, [])

    return [isMounted]
}

// 1. Хуки должны быть вызваны только из тела функционального компонента
//      если делать вызов из класс-компонента получим ошибку
// 2. Нельзя менять порядок исполнения хуков или оборачивать хуки в if
//      браузер запоминает порядок исполнения хуков при первом рендере

// useMemo подходит для сложных вычислений, не факт что запомнит все аргументы, может почистить какие-то значения для освобождения памяти
export function MyHook3({ title, id }: { title: string, id?: string }) {
    const items = 10;
    const multiplier = 5;
    const result = React.useMemo(
        () => calculate(items, multiplier),
        [items, multiplier]
    );

    return (
        <div>{result}</div>
    )
}

function calculate(items: number, multiplier: number) {
    return new Array(items).fill(1).reduce((a, v) => a * multiplier)
}