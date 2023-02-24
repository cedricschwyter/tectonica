interface TeamProps {
    // children: ReactNode;
}

const Team = ({ }: TeamProps) => {
    const members = [
        {
            name: "Eugen Hasso",
            picture: "https://unsplash.com/photos/0Zx1bDv5BNY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY5MTk1NDk0&force=true",
            position: "CEO",
        },
        {
            name: "Eugen Hasso",
            picture: "https://unsplash.com/photos/HzDF-rxlSeM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OHx8d29yayUyMHBvcnRyYWl0fGVufDB8fHx8MTY2OTIwMzU0MA&force=true",
            position: "Bauleiter",
        },
    ]
    return (
        <>
            <h1>Team</h1>
        </>
    );
}

export default Team;