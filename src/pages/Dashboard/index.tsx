import React from 'react';
import { FiClock, FiPower } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Calendar,
} from './styles';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem vindo(a),</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Schedule</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 2</span>
            <span>Domingo</span>
          </p>

          <NextAppointment>
            <strong>Next appointment</strong>
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/60984558?v=4"
                alt="Paula Guedes"
              />
              <strong>Paula Guedes</strong>
              <span>
                <FiClock />
                14:00
              </span>
            </div>
          </NextAppointment>
        </Schedule>
        <Calendar>
          <h6>calendar</h6>
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
