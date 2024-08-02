
const Section = ({ id, children }) => {
    return (
        <section id={id} className="min-h-screen flex flex-col items-Start justify-center">
            {children}
        </section>
    );
};

export default Section;
