// Section component

const Section = props => (
    <>
        <section className = "section">
            {props.children}
        </section>
        <style jsx>{`
            .section {
                width: 100vw;
                min-height: ${props.height || "100vh"};
                background-color: ${props.color};
                ${props.center &&
                    `display: grid;
                    justify-content: center;
                    align-content: center;`
                }
            }
        `}</style>
    </>
)

// Exports

export default Section