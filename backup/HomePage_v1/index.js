import React from 'react';
import { Container, Content, Sessao1 } from './styles';

import { ButtonComponent } from '../../components';
function HomePage() {
    return (
        <>
            <Container>
                <Content>
                    <Sessao1>
                        <div>
                            <h1>
                                Asadfsdf sdf sdf sdfdfsadfsad gemgemwqwqr
                                repoger wogmpoqwkçl ,f gergweom jq
                                jmndksfndsafsdfsdfs asg g qw wqeglms wçeofdf
                                sadg
                            </h1>

                            <p>
                                Asadfsdf sdf sdf sdfdfsadfsad gemgemwqwqr
                                repoger wogmpoqwkçl ,f gergweom jq
                                jmndksfndsafsdfsdfs asg g qw wqeglms wçeofdf
                                sadgZ
                            </p>

                            <ButtonComponent url='/Dados'>
                                DADOS
                            </ButtonComponent>
                        </div>
                    </Sessao1>
                </Content>
            </Container>
        </>
    );
}

export default HomePage;
