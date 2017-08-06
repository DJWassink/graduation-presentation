// Import React
import React from 'react';

// Import Spectacle Core tags
import {
    BlockQuote,
    Cite,
    CodePane,
    Deck,
    Heading,
    ListItem,
    List,
    Quote,
    Slide,
    Text,
    Layout,
    Fill,
    Fit,
    Image
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

// Prism
require('prismjs/themes/prism-tomorrow.css');
require('prismjs');
require('prismjs/components/prism-jsx.min');
require('prismjs/components/prism-protobuf.min');
require('prismjs/components/prism-bash.min');
require('prismjs/components/prism-graphql.min');
require('prismjs/components/prism-json.min');
require('prismjs/components/prism-php.min');
require('prismjs/components/prism-typescript.min');

require('./style.css');

const images = {
    restful: require('../assets/images/restful.png'),
    restfulish: require('../assets/images/restful-ish.png'),
    documentation: require('../assets/images/documentation.jpg'),
    standarizedApi: require('../assets/images/standarized-api.png'),
    kepner: require('../assets/images/kepner-tregoe.png'),
    criteria: require('../assets/images/kepner-criteria.png'),
    restfulScore: require('../assets/images/restful-score.png'),
    restfulTotaalScore: require('../assets/images/restful-totaal-score.png'),
    criteriaScore: require('../assets/images/criteria-score.png'),
    datamodel: require('../assets/images/datamodel.png')
};

preloader(images);

const theme = createTheme(
    {
        primary: 'white',
        secondary: '#1F2022',
        tertiary: '#1ebab8',
        quartenary: '#CECECE'
    },
    {
        primary: 'Montserrat',
        secondary: 'Helvetica'
    }
);

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck theme={theme}>
                <Slide bgColor="primary">
                    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                        Label<span style={{color: theme.screen.colors.tertiary}}>305</span>
                    </Heading>
                    <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                        data-communicatie-protocollen
                    </Text>
                </Slide>
                <Slide bgColor="tertiary">
                    <Heading size={3} textColor="secondary">
                        Agenda
                    </Heading>
                    <List>
                        <ListItem>Probleem</ListItem>
                        <ListItem>Doelstelling</ListItem>
                        <ListItem>Onderzoek</ListItem>
                        <List>
                            <ListItem>Interviews</ListItem>
                            <ListItem>Kepner Tregoe</ListItem>
                        </List>
                        <ListItem>Protocollen</ListItem>
                        <List>
                            <ListItem>Protobuf</ListItem>
                            <ListItem>GraphQL</ListItem>
                        </List>
                        <ListItem>Conclusie</ListItem>
                    </List>
                </Slide>
                {/*Start probleem*/}
                <Slide bgColor="primary" textColor="tertiary" maxHeight="100%" maxWidth="100%" notes="Jonas Helfer">
                    <Heading size={4} textColor="secondary">
                        Probleem
                    </Heading>
                    <Heading size={8} textColor="secondary">
                        RESTful - één endpoint per entiteit
                    </Heading>
                    <br />
                    <br />
                    <Layout>
                        <Fill>
                            <Image src={images.restful} width="80%" />
                        </Fill>
                        <Fit style={{minWidth: '25%'}}>
                            <Heading size={6} textColor="secondary">
                                Voordelen
                            </Heading>
                            <List>
                                <ListItem style={{fontSize: '1.3rem'}}>Flexibel</ListItem>
                                <ListItem style={{fontSize: '1.3rem'}}>Low coupeling</ListItem>
                            </List>
                            <br />
                            <Heading size={6} textColor="secondary">
                                Nadelen
                            </Heading>
                            <List>
                                <ListItem style={{fontSize: '1.3rem'}}>Veel requests</ListItem>
                                <ListItem style={{fontSize: '1.3rem'}}>Veel data</ListItem>
                                <ListItem style={{fontSize: '1.3rem'}}>Complexe client</ListItem>
                            </List>
                        </Fit>
                    </Layout>
                    <Text style={{float: 'left', fontSize: '0.5rem'}}>
                        https://speakerdeck.com/helfer/graphql-evolution-or-revolution?slide=12
                    </Text>
                </Slide>
                <Slide bgColor="primary" textColor="tertiary" maxHeight="100%" maxWidth="100%">
                    <Heading size={4} textColor="secondary">
                        Probleem
                    </Heading>
                    <Heading size={8} textColor="secondary">
                        RESTful-ish - één endpoint per view
                    </Heading>
                    <br />
                    <br />
                    <Layout>
                        <Fill>
                            <Image src={images.restfulish} width="80%" />
                        </Fill>
                        <Fit style={{minWidth: '25%'}}>
                            <Heading size={6} textColor="secondary">
                                Voordelen
                            </Heading>
                            <List>
                                <ListItem style={{fontSize: '1.3rem'}}>Één request</ListItem>
                                <ListItem style={{fontSize: '1.3rem'}}>Weinig data</ListItem>
                            </List>
                            <br />
                            <Heading size={6} textColor="secondary">
                                Nadelen
                            </Heading>
                            <List>
                                <ListItem style={{fontSize: '1.3rem'}}>Niet flexibel</ListItem>
                                <ListItem style={{fontSize: '1.3rem'}}>Moeilijk onderhoudbaar</ListItem>
                                <ListItem style={{fontSize: '1.3rem'}}>Traage development</ListItem>
                                <ListItem style={{fontSize: '1.3rem'}}>Tightly coupled</ListItem>
                            </List>
                        </Fit>
                    </Layout>
                    <Text style={{float: 'left', fontSize: '0.5rem'}}>
                        https://speakerdeck.com/helfer/graphql-evolution-or-revolution?slide=13
                    </Text>
                </Slide>
                <Slide bgImage={images.documentation} bgDarken={0.8} textColor="tertiary" maxWidth="50%">
                    <Heading size={1} textColor="primary">
                        Probleem
                    </Heading>
                    <Heading size={3} textColor="primary">
                        Documentatie
                    </Heading>
                    <List>
                        <ListItem style={{fontSize: '3.5rem'}}>Bijhouden</ListItem>
                        <ListItem style={{fontSize: '3.5rem'}}>Meerdere "point of thruth"</ListItem>
                        <ListItem style={{fontSize: '3.5rem'}}>Fout gevoelig</ListItem>
                        <ListItem style={{fontSize: '3.5rem'}}>Meer werk</ListItem>
                        <ListItem style={{fontSize: '3.5rem'}}>Frustratie</ListItem>
                        <ListItem style={{fontSize: '3.5rem'}}>Wijzigingen?</ListItem>
                    </List>
                </Slide>
                {/* Einde probleem */}

                {/*Start doelstelling*/}
                <Slide bgColor="primary" textColor="tertiary" maxHeight="90%" maxWidth="100%">
                    <Heading size={6} textColor="secondary">
                        Doelstelling
                    </Heading>
                    <br />
                    <Image src={images.standarizedApi} width="75%" />
                    <br />
                    {/*<Layout>*/}
                    {/*<Fill>*/}
                    {/*</Fill>*/}
                    {/*<Fit style={{minWidth: '25%'}}>*/}
                    {/*<Heading size={8} textColor="secondary">Requirements?</Heading>*/}
                    {/*<List>*/}
                    {/*<ListItem style={{fontSize: '1rem'}}>Flexibel</ListItem>*/}
                    {/*<ListItem style={{fontSize: '1rem'}}>Weinig requests</ListItem>*/}
                    {/*<ListItem style={{fontSize: '1rem'}}>Weinig datagebruik</ListItem>*/}
                    {/*<ListItem style={{fontSize: '1rem'}}>Low coupling</ListItem>*/}
                    {/*<ListItem style={{fontSize: '1rem'}}>Zelf beschrijvend</ListItem>*/}
                    {/*</List>*/}
                    {/*</Fit>*/}
                    {/*</Layout>*/}
                    <Text style={{float: 'left', fontSize: '0.5rem'}}>
                        https://speakerdeck.com/helfer/graphql-evolution-or-revolution?slide=14
                    </Text>
                </Slide>

                <Slide bgColor="tertiary" textColor="tertiary">
                    <Heading size={1} textColor="secondary">
                        Requirements?
                    </Heading>
                </Slide>
                {/* Einde doelstelling*/}

                {/* Interview/Criteria */}

                <Slide
                    bgColor="primary"
                    maxHeight="100%"
                    textColor="tertiary"
                    notes="goede documentatie: welke endpoints, dataschema.">
                    <Heading size={1} textColor="secondary">
                        Criteria
                    </Heading>
                    <List>
                        <ListItem>Criteria uit interviews</ListItem>
                        <List>
                            <ListItem>Testbaar</ListItem>
                            <ListItem>Developer experience</ListItem>
                            <ListItem>Goede documentatie</ListItem>
                            <ListItem>Efficiëntie</ListItem>
                            <ListItem>Wijzigingen</ListItem>
                        </List>
                        <ListItem>Vereisten</ListItem>
                        <List>
                            <ListItem>Authenticatie</ListItem>
                            <ListItem>> PHP 7.1</ListItem>
                            <ListItem>> Node.js 6.10.0</ListItem>
                            <ListItem>ES5 browsers</ListItem>
                        </List>
                    </List>
                </Slide>

                <Slide className="full-height" bgColor="tertiary" textColor="tertiary" maxWidth="100%" maxHeight="100%">
                    <Heading size={6} textColor="secondary">
                        Kepner Tregoe - Criteria
                    </Heading>
                    <br />
                    <Image src={images.criteria} height="85%" />
                </Slide>

                <Slide className="full-height" bgColor="tertiary" textColor="tertiary" maxWidth="100%" maxHeight="100%">
                    <Heading size={6} textColor="secondary">
                        Kepner Tregoe - Werking
                    </Heading>
                    <br />

                    <Layout className="full-height">
                        <Fill>
                            <Image src={images.criteria} height="70vh" />
                        </Fill>
                        <Fill>
                            <Image src={images.restfulScore} height="70vh" />
                        </Fill>
                        <Fill>
                            <Image src={images.restfulTotaalScore} height="70vh" />
                        </Fill>
                    </Layout>
                </Slide>

                <Slide bgColor="tertiary" textColor="tertiary" maxWidth="100%" maxHeight="90%">
                    <Heading size={6} textColor="secondary">
                        Kepner Tregoe - Matrix
                    </Heading>
                    <br />
                    <Image src={images.kepner} width="100%" />
                </Slide>

                <Slide bgColor="tertiary" textColor="secondary">
                    <Heading fit textColor="secondary">
                        Kepner Tregoe resultaten
                    </Heading>
                    <br />
                    <List ordered>
                        <ListItem>&nbsp;&nbsp; 109&nbsp;&nbsp;-&nbsp;GraphQL</ListItem>
                        <ListItem>&nbsp;&nbsp;104&nbsp;&nbsp;-&nbsp;Protobuf</ListItem>
                        <ListItem>
                            &nbsp;&nbsp;102&nbsp;&nbsp;-&nbsp;<s>Thrift</s>
                        </ListItem>
                        <ListItem>&nbsp;&nbsp;91&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;JSON API</ListItem>
                        <ListItem>&nbsp;&nbsp;84&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;RESTful</ListItem>
                    </List>
                </Slide>
                {/* Einde Interview/Criteria */}

                <Slide bgColor="tertiary" textColor="tertiary">
                    <Heading size={3} textColor="secondary">
                        Resultaten valideren
                    </Heading>
                    <br />
                    <Text fit>Protocollen uitwerken in Proof of Concepten</Text>
                </Slide>

                <Slide bgColor="tertiary" textColor="tertiary" maxHeight="100%">
                    <Heading size={3} textColor="secondary">
                        Datamodel
                    </Heading>
                    <br />
                    <Image src={images.datamodel} height="100%" />
                </Slide>

                {/* Start protobuf */}
                <Slide bgColor="tertiary" textColor="tertiary">
                    <Heading size={1} textColor="secondary">
                        Protobuf?
                    </Heading>
                </Slide>

                <Slide bgColor="secondary" textColor="primary">
                    <Heading size={3} textColor="primary">
                        Proto schema
                    </Heading>
                    <div className="code-pane-size-30">
                        <CodePane
                            style={{fontSize: '0.8em'}}
                            lang="protobuf"
                            source={require('raw-loader!../assets/code/protobuf.example')}
                        />
                    </div>
                </Slide>

                <Slide bgColor="secondary" textColor="primary" maxWidth="100%" maxHeight="100%">
                    <Heading size={6} textColor="primary">
                        Protobuf
                    </Heading>
                    <br />
                    <Layout>
                        <Fill style={{padding: '5px'}}>
                            <Heading size={12} style={{fontSize: '2em'}} textColor="primary">
                                PHP
                            </Heading>
                            <div className="code-pane-size-24">
                                <CodePane
                                    style={{fontSize: '0.8em'}}
                                    lang="php"
                                    source={require('raw-loader!../assets/code/protobuf_php.example')}
                                />
                            </div>
                        </Fill>

                        <Fill style={{padding: '5px'}}>
                            <Heading size={12} style={{fontSize: '2em'}} textColor="primary">
                                JavaScript
                            </Heading>
                            <div className="code-pane-size-24">
                                <CodePane
                                    style={{fontSize: '0.8em'}}
                                    lang="javascript"
                                    source={require('raw-loader!../assets/code/protobuf_js.example')}
                                />
                            </div>
                        </Fill>
                    </Layout>
                </Slide>

                <Slide bgColor="secondary" textColor="primary" maxWidth="100%" maxHeight="100%">
                    <Heading size={6} textColor="primary">
                        Protobuf
                    </Heading>
                    <Layout>
                        <Fill style={{padding: '5px'}}>
                            <Heading size={12} style={{fontSize: '2em'}} textColor="primary">
                                Proto
                            </Heading>
                            <Text textColor="tertiary">270 chars</Text>
                            <div className="max-50vw">
                                <CodePane
                                    lang="break"
                                    source={require('raw-loader!../assets/code/protobuffer.example')}
                                />
                            </div>
                        </Fill>

                        <Fill style={{padding: '5px'}}>
                            <Heading size={12} style={{fontSize: '2em'}} textColor="primary">
                                Json
                            </Heading>
                            <Text textColor="tertiary">704 chars</Text>
                            <div className="max-50vw">
                                <CodePane
                                    lang="javascript"
                                    source={require('raw-loader!../assets/code/json.example')}
                                />
                            </div>
                        </Fill>
                    </Layout>
                </Slide>

                <Slide bgColor="primary" textColor="tertiary" maxHeight="80%">
                    <Heading size={3} textColor="secondary">
                        Protobuf
                    </Heading>
                    <br />
                    <Heading size={5} textColor="secondary">
                        Voordelen
                    </Heading>
                    <List>
                        <ListItem>Weinig data</ListItem>
                        <ListItem>Proto schema</ListItem>
                    </List>
                    <Heading size={5} textColor="secondary">
                        Nadelen
                    </Heading>
                    <List>
                        <ListItem>Onduidelijke data</ListItem>
                        <ListItem>Error prone</ListItem>
                        <ListItem>Niet zelfbeschrijvend</ListItem>
                        <ListItem>Documentatie schrijven</ListItem>
                        <ListItem>Niet schaalbaar</ListItem>
                    </List>
                </Slide>

                <Slide bgColor="tertiary" textColor="tertiary" maxWidth="75%">
                    <Heading fit textColor="secondary">
                        Protobuf de oplossing?
                    </Heading>
                    <Heading fit textColor="secondary">
                        Helaas. Zelfde problemen als RESTful(-ish)
                    </Heading>
                </Slide>
                {/* Eind protobuf */}

                {/* Start GraphQL */}
                <Slide bgColor="tertiary" textColor="tertiary">
                    <Heading size={1} textColor="secondary">
                        GraphQL?
                    </Heading>
                </Slide>

                <Slide bgColor="secondary" textColor="primary" maxHeight="100%" maxWidth="50%">
                    <Heading size={3} textColor="primary">
                        GraphQLs
                    </Heading>
                    <br />
                    <div className="code-pane-size-30">
                        <CodePane
                            style={{fontSize: '1.5em!important'}}
                            lang="graphql"
                            source={require('raw-loader!../assets/code/graphqls.example')}
                        />
                    </div>
                </Slide>

                <Slide bgColor="secondary" textColor="primary" maxHeight="100%" maxWidth="50%">
                    <Heading size={3} textColor="primary">
                        GraphQL query
                    </Heading>
                    <br />
                    <div className="code-pane-size-30">
                        <CodePane
                            style={{fontSize: '1.5em!important'}}
                            lang="graphql"
                            source={require('raw-loader!../assets/code/graphql-query.example')}
                        />
                    </div>
                </Slide>

                <CodeSlide
                    className="padding-top-55"
                    style={{fontSize: '3rem!important', top: '-1px', left: '-1px'}}
                    bgColor="secondary"
                    color="#ccc"
                    lang="typescript"
                    maxHeight="100%"
                    maxWidth="80%"
                    code={require('raw-loader!../assets/code/resolver.example')}
                    ranges={[
                        {loc: [0, 23], title: 'ResolverObject'},
                        {loc: [1, 9]},
                        {loc: [2, 5], note: 'Post a.d.h.v. zijn id (zonder relaties)'},
                        {loc: [14, 22]},
                        {loc: [15, 18], note: 'Post zijn author relatie'},
                        {loc: [9, 14]}
                    ]}
                />

                <Slide bgColor="secondary" textColor="primary" maxHeight="100%" maxWidth="65%">
                    <Heading fit textColor="primary">
                        GraphQL query resultaat
                    </Heading>
                    <br />
                    <div className="code-pane-size-30">
                        <CodePane
                            style={{fontSize: '1.5em!important'}}
                            lang="graphql"
                            source={require('raw-loader!../assets/code/graphql-query-result.example')}
                        />
                    </div>
                </Slide>

                <Slide bgColor="tertiary" textColor="secondary">
                    <Heading size={3}>GraphQL tools</Heading>
                    <br />
                    <List>
                        <ListItem>GraphiQL</ListItem>
                        <ListItem>GraphQL Voyager</ListItem>
                        <ListItem>GraphQL devtools</ListItem>
                        <ListItem>TypeScript compiler</ListItem>
                    </List>
                </Slide>

                <Slide className="vh95" bgColor="tertiary" textColor="secondary" maxHeight="100%" maxWidth="100%">
                    <Heading size={3}>GraphiQL</Heading>
                    <br />
                    <iframe
                        className="zoomed1-8"
                        src="http://localhost:8000/graphql?query=%7B%0A%20%20post(id%3A%2015)%20%7B%0A%20%20%20%20title%2C%0A%20%20%20%20body%2C%0A%20%20%20%20createdAt%2C%0A%20%20%20%20author%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D"
                        width="100%"
                        height="80vh"
                    />
                </Slide>

                <Slide bgColor="secondary" textColor="primary" maxWidth="100%" maxHeight="100%">
                    <Heading size={6} textColor="primary">
                        TypeScript compiler
                    </Heading>
                    <br />
                    <Layout>
                        <Fill style={{padding: '10px'}}>
                            <Heading size={7} style={{fontSize: '2em'}} textColor="primary">
                                Query
                            </Heading>
                            <div className="code-pane-size-28">
                                <CodePane
                                    lang="javascript"
                                    source={require('raw-loader!../assets/code/react-query.example')}
                                />
                            </div>
                        </Fill>

                        <Fill style={{padding: '10px'}}>
                            <Heading size={7} style={{fontSize: '2em'}} textColor="primary">
                                TypeScript defenities
                            </Heading>
                            <div className="code-pane-size-28">
                                <CodePane
                                    lang="typescript"
                                    source={require('raw-loader!../assets/code/typescript-compiler.example')}
                                />
                            </div>
                        </Fill>
                    </Layout>
                </Slide>

                <Slide bgColor="primary" textColor="tertiary" maxHeight="100%">
                    <Heading size={3} textColor="secondary">
                        GraphQL
                    </Heading>
                    <br />
                    <Heading size={5} textColor="secondary">
                        Voordelen
                    </Heading>
                    <List>
                        <ListItem>GraphQLs schema</ListItem>
                        <ListItem>Zelf beschrijvend</ListItem>
                        <ListItem>Developer experience</ListItem>
                        <ListItem>Leesbare data (JSON)</ListItem>
                        <ListItem>Minder data dan RESTful</ListItem>
                        <ListItem>Nestbare data</ListItem>
                        <ListItem>Zelf benodigde data bepalen</ListItem>
                    </List>
                    <Heading size={5} textColor="secondary">
                        Nadelen
                    </Heading>
                    <List>
                        <ListItem>Error handeling, geen spec</ListItem>
                        <ListItem>Authenticatie, geen spec</ListItem>
                    </List>
                </Slide>

                <Slide bgColor="tertiary" textColor="tertiary" maxWidth="75%">
                    <Heading fit textColor="secondary">
                        GraphQL de oplossing?
                    </Heading>
                </Slide>

                <Slide bgColor="tertiary" textColor="secondary">
                    <Heading size={3} textColor="secondary">
                        Requirements
                    </Heading>
                    <List>
                        <ListItem>Criteria uit interviews</ListItem>
                        <List>
                            <ListItem>Testbaar ✔️</ListItem>
                            <ListItem>Developer experience ✔️</ListItem>
                            <ListItem>Goede documentatie ✔️</ListItem>
                            <ListItem>Efficiëntie ✔️</ListItem>
                            <ListItem>Wijzigingen ✔️</ListItem>
                        </List>
                        <ListItem>Vereisten</ListItem>
                        <List>
                            <ListItem>Authenticatie ✔️</ListItem>
                            <ListItem>> PHP 7.1 ✔️</ListItem>
                            <ListItem>> Node.js 6.10.0 ✔️</ListItem>
                            <ListItem>ES5 browsers ✔️</ListItem>
                        </List>
                    </List>
                </Slide>
                {/* Einde GraphQL */}

                <Slide bgColor="tertiary" textColor="tertiary">
                    <Heading size={1} textColor="secondary">
                        Conclusie
                    </Heading>
                    <br />
                    <Text>Protobuf handig voor data zuinige scenario's</Text>
                    <br />
                    <Text>GraphQL ideaal voor ontwikkelen & onderhouden van applicaties</Text>
                </Slide>

                <Slide bgColor="tertiary" textColor="tertiary">
                    <Heading size={1} textColor="secondary">
                        Einde
                    </Heading>
                </Slide>
            </Deck>
        );
    }
}
