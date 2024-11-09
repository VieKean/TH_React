function Hello() {
    // const person = {
    //     name: 'Peter',
    //     theme: {
    //         backgroundColor: 'green',
    //         color: 'white'
    //     }
    // };

    // return (
    //     <>
    //         <div style={person.theme}>
    //             <h1>Xin chào: {person.name}</h1>
    //         </div>
    //         <div>Chúc bạn thành công với React</div>
    //     </>
    // );
    const hiAll = () => {
        alert("Hello everyone");
    };

    const hiYou = (name) => {
        alert("Hello " + name);
    };

    return (
        <span>
            <button onClick={hiAll}>Hi All</button> 
            <button onClick={() => hiYou('Vĩ Khang')}>Hi You</button>
        </span>
    );
}

function HelloPerson(props) {
    return (
        <div>
            <h1>Xin chào bạn: {props.name}</h1>
        </div>
    );
}

export default Hello;
export { HelloPerson };
