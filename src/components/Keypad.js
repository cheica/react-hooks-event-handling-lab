// Code Keypad Component Here

function Keypad() {
    return(
        <>
        <input 
        type="password" 
        name="passfield"
        onChange = {(event) => console.log('Entering password...')}
        placeholder="Enter PW here..."/>
        </>
    );

}

export default Keypad;