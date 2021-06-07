
as();



class Font extends React.Component {

    render() {
        const style = {
            color: "black",
            backgroundColor: "blue",
        }
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.race}</p>
                <p>{this.props.health}</p>
                <p>{this.props.stamina}</p>
            </div>
        );
    }
}
async function as() {

    var a = await fetch('ob.json');
    var jDat = await a.json();
    const { name } = jDat;

    var ran = Math.round(Math.random() * 4);

    console.log(ran);
    var charDat = jDat[ran];
    ReactDOM.render(
        <Font
            name={"Name: " + charDat.Name}
            race={"Race: " + charDat.Race}
            health={"Health: " + charDat.Health}
            stamina={"Stamina: " + charDat.Stamina} />
        , document.getElementById('mydiv'));

}
//ReactDOM.render(<Font name={"jDat.name"} />, document.getElementById('mydiv'));