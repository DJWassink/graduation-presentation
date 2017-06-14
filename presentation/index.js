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
    kepner: require('../assets/images/kepner-tregoe.png')
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
            <Deck transition={[]} transitionDuration={0} theme={theme}>
                <Slide transition={['zoom']} bgColor="primary">
                    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                        Label<span style={{color: theme.screen.colors.tertiary}}>305</span>
                    </Heading>
                    <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                        data-communicatie-protocollen
                    </Text>
                </Slide>
                <Slide transition={['fade']} bgColor="tertiary">
                    <Heading size={3} textColor="secondary">Agenda</Heading>
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
                <Slide
                    transition={['fade']}
                    bgColor="primary"
                    textColor="tertiary"
                    maxHeight="100%"
                    maxWidth="85%"
                    notes="Jonas Helfer">
                    <Heading size={5} textColor="secondary">Probleem</Heading>
                    <Heading size={10} textColor="secondary">RESTful - één endpoint per entiteit</Heading>
                    <br />
                    <Layout>
                        <Fill>
                            <Image src={images.restful} width="80%" />
                        </Fill>
                        <Fit style={{minWidth: '25%'}}>
                            <Heading size={8} textColor="secondary">Voordelen</Heading>
                            <List>
                                <ListItem style={{fontSize: '1rem'}}>Flexibel</ListItem>
                                <ListItem style={{fontSize: '1rem'}}>Low coupeling</ListItem>
                            </List>
                            <br />
                            <Heading size={8} textColor="secondary">Nadelen</Heading>
                            <List>
                                <ListItem style={{fontSize: '1rem'}}>Veel requests</ListItem>
                                <ListItem style={{fontSize: '1rem'}}>Veel data</ListItem>
                                <ListItem style={{fontSize: '1rem'}}>Complexe client</ListItem>
                            </List>
                        </Fit>
                    </Layout>
                    <Text style={{float: 'left', fontSize: '0.5rem'}}>
                        https://speakerdeck.com/helfer/graphql-evolution-or-revolution?slide=12
                    </Text>
                </Slide>
                <Slide transition={['fade']} bgColor="primary" textColor="tertiary" maxHeight="100%" maxWidth="85%">
                    <Heading size={6} textColor="secondary">Probleem</Heading>
                    <Heading size={12} textColor="secondary">RESTful-ish - één endpoint per view</Heading>
                    <br />
                    <Layout>
                        <Fill>
                            <Image src={images.restfulish} width="80%" />
                        </Fill>
                        <Fit style={{minWidth: '25%'}}>
                            <Heading size={8} textColor="secondary">Voordelen</Heading>
                            <List>
                                <ListItem style={{fontSize: '1rem'}}>Één request</ListItem>
                                <ListItem style={{fontSize: '1rem'}}>Weinig data</ListItem>
                            </List>
                            <br />
                            <Heading size={8} textColor="secondary">Nadelen</Heading>
                            <List>
                                <ListItem style={{fontSize: '1rem'}}>Niet flexibel</ListItem>
                                <ListItem style={{fontSize: '1rem'}}>Moeilijk onderhoudbaar</ListItem>
                                <ListItem style={{fontSize: '1rem'}}>Traage development</ListItem>
                                <ListItem style={{fontSize: '1rem'}}>Tightly coupled</ListItem>
                            </List>
                        </Fit>
                    </Layout>
                    <Text style={{float: 'left', fontSize: '0.5rem'}}>
                        https://speakerdeck.com/helfer/graphql-evolution-or-revolution?slide=13
                    </Text>
                </Slide>
                <Slide
                    transition={['fade']}
                    bgImage={images.documentation}
                    bgDarken={0.8}
                    textColor="tertiary"
                    maxWidth="50%">
                    <Heading size={2} textColor="primary">Probleem</Heading>
                    <Heading size={4} textColor="primary">Documentatie</Heading>
                    <List style={{fontSize: '1.3rem'}}>
                        <ListItem>Bijhouden</ListItem>
                        <ListItem>Meerdere "point of thruth"</ListItem>
                        <ListItem>Fout gevoelig</ListItem>
                        <ListItem>Meer werk</ListItem>
                        <ListItem>Frustratie</ListItem>
                        <ListItem>Wijzigingen?</ListItem>
                    </List>
                </Slide>
                {/* Einde probleem */}

                {/*Start doelstelling*/}
                <Slide transition={['fade']} bgColor="primary" textColor="tertiary" maxHeight="90%" maxWidth="85%">
                    <Heading size={6} textColor="secondary">Doelstelling</Heading>
                    <br />
                    <Image src={images.standarizedApi} width="60%" />
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

                <Slide transition={['fade']} bgColor="tertiary" textColor="tertiary">
                    <Heading size={1} textColor="secondary">Requirements?</Heading>
                </Slide>
                {/* Einde doelstelling*/}

                {/* Interview/Criteria */}

                <Slide
                    transition={['fade']}
                    bgColor="primary"
                    maxHeight="100%"
                    textColor="tertiary"
                    notes="goede documentatie: welke endpoints, dataschema.">
                    <Heading size={1} textColor="secondary">Criteria</Heading>
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

                <Slide transition={['fade']} bgColor="tertiary" textColor="tertiary" maxWidth="95%" maxHeight="90%">
                    <Heading size={6} textColor="secondary">Kepner Tregoe</Heading>
                    <br />
                    <Image src={images.kepner} width="100%" />
                </Slide>

                <Slide transition={['fade']} bgColor="tertiary" textColor="secondary" maxWidth="40%" maxHeight="80%">
                    <Heading fit textColor="secondary">Kepner Tregoe resultaten</Heading>
                    <br />
                    <List ordered>
                        <ListItem>&nbsp;&nbsp; 109&nbsp;&nbsp;-&nbsp;GraphQL</ListItem>
                        <ListItem>&nbsp;&nbsp;104&nbsp;&nbsp;-&nbsp;Protobuf</ListItem>
                        <ListItem>&nbsp;&nbsp;102&nbsp;&nbsp;-&nbsp;<s>Thrift</s></ListItem>
                        <ListItem>&nbsp;&nbsp;91&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;JSON API</ListItem>
                        <ListItem>&nbsp;&nbsp;84&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;RESTful</ListItem>
                    </List>
                </Slide>

                {/* Einde Interview/Criteria */}

                {/* Start protobuf */}
                <Slide transition={['fade']} bgColor="tertiary" textColor="tertiary">
                    <Heading size={1} textColor="secondary">Protobuf?</Heading>
                </Slide>

                <Slide transition={['fade']} bgColor="secondary" textColor="primary" maxWidth="100%" maxHeight="100%">
                    <Heading size={6} textColor="primary" caps>Protobuf</Heading>
                    <br />
                    <Layout>
                        <Fill style={{padding: '15px'}}>
                            <Heading size={12} textColor="primary">Proto</Heading>
                            <CodePane
                                style={{fontSize: '0.8em'}}
                                lang="protobuf"
                                source={require('raw-loader!../assets/code/protobuf.example')}
                            />
                        </Fill>

                        <Fill style={{padding: '15px'}}>
                            <Heading size={12} textColor="primary">PHP</Heading>
                            <CodePane
                                style={{fontSize: '0.8em'}}
                                lang="php"
                                source={require('raw-loader!../assets/code/protobuf_php.example')}
                            />
                        </Fill>

                        <Fill style={{padding: '15px'}}>
                            <Heading size={12} textColor="primary">JavaScript</Heading>
                            <CodePane
                                style={{fontSize: '0.8em'}}
                                lang="javascript"
                                source={require('raw-loader!../assets/code/protobuf_js.example')}
                            />
                        </Fill>
                    </Layout>
                </Slide>

                <Slide transition={['fade']} bgColor="secondary" textColor="primary" maxWidth="100%" maxHeight="100%">
                    <Heading size={6} textColor="primary" caps>Protobuf</Heading>
                    <Layout>
                        <Fill style={{padding: '15px'}}>
                            <Heading size={12} textColor="primary">Proto</Heading>
                            <Text textColor="tertiary">270 chars</Text>
                            <CodePane lang="break" source={require('raw-loader!../assets/code/protobuffer.example')} />
                        </Fill>

                        <Fill style={{padding: '15px'}}>
                            <Heading size={12} textColor="primary">Json</Heading>
                            <Text textColor="tertiary">704 chars</Text>
                            <CodePane lang="javascript" source={require('raw-loader!../assets/code/json.example')} />
                        </Fill>
                    </Layout>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary" maxHeight="80%">
                    <Heading size={3} textColor="secondary" caps>Protobuf</Heading>
                    <br />
                    <Heading size={5} textColor="secondary">Voordelen</Heading>
                    <List>
                        <ListItem>Weinig data</ListItem>
                        <ListItem>Proto schema</ListItem>
                    </List>
                    <Heading size={5} textColor="secondary">Nadelen</Heading>
                    <List>
                        <ListItem>Onduidelijke data</ListItem>
                        <ListItem>Error prone</ListItem>
                        <ListItem>Niet zelfbeschrijvend</ListItem>
                        <ListItem>Documentatie schrijven</ListItem>
                        <ListItem>Niet schaalbaar</ListItem>
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="tertiary" textColor="tertiary" maxWidth="50%">
                    <Heading fit textColor="secondary">Protobuf de oplossing?</Heading>
                    <Heading fit textColor="secondary">Helaas.. Zelfde problemen als RESTful-ish</Heading>
                </Slide>
                {/* Eind protobuf */}

                {/* Start GraphQL */}
                <Slide transition={['fade']} bgColor="tertiary" textColor="tertiary">
                    <Heading size={1} textColor="secondary">GraphQL?</Heading>
                </Slide>

                <Slide transition={['fade']} bgColor="secondary" textColor="primary" maxHeight="100%">
                    <Heading size={3} textColor="primary">GraphQLs</Heading>
                    <br />
                    <CodePane
                        style={{fontSize: '1.5em!important'}}
                        lang="graphql"
                        source={require('raw-loader!../assets/code/graphqls.example')}
                    />
                </Slide>

                <CodeSlide
                    style={{fontSize: '1.1rem'}}
                    bgColor="secondary"
                    color="#ccc"
                    transition={[]}
                    lang="typescript"
                    maxHeight="100%"
                    maxWidth="80%"
                    code={require('raw-loader!../assets/code/resolver.example')}
                    ranges={[
                        {loc: [0, 18], title: 'ResolverObject'},
                        {loc: [1, 6]},
                        {loc: [2, 5], note: 'Post zonder relaties'},
                        {loc: [6, 17]},
                        {loc: [7, 10], note: 'Post zijn author'}
                    ]}
                />

                {/* Einde GraphQL */}
            </Deck>
        );
    }
}
