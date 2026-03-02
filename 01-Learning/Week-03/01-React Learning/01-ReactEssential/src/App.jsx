import CoreConcept from "./Component/CoreConcept/CoreConcept.jsx";
import {CORE_CONCEPTS} from "./data.js";
import Header from "./Component/Header/Header.jsx";
import TabButton from "./Component/TabButton.jsx";

function App() {
    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concept</h2>
                    <ul>
                       <CoreConcept
                            title = {CORE_CONCEPTS[0].title}
                            description ={CORE_CONCEPTS[0].description}
                            image={CORE_CONCEPTS[0].image} />
                        {/*/> we can use this syntax also*/}
                        <CoreConcept {...CORE_CONCEPTS[1]} />
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept {...CORE_CONCEPTS[3]} />

                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton label='Components' />
                    </menu>
                </section>
            </main>
        </div>
    );
}

export default App;