import Card from "../../components/card/card";

const Skills = () => {
    return <div className="Content">
        <div style={{
            minHeight: '100%', 
            display: "flex", 
            flexWrap: 'wrap',
            position: "relative",
            // zIndex: -10,
            placeContent: "center",
            // backgroundColor: "black", 
            rowGap: '1rem'
        }}>
            <Card content={'Card 1'} />
            <Card content={'Card 2'} />
            <Card content={'Card 3'} />
            <Card content={'Card 4'} /> 
            <Card content={'Card 5'} />
            <Card content={'Card 6'} />
            <Card content={'Card 7'} />
            <Card content={'Card 8'} />
        </div>
    </div>
};

export default Skills;