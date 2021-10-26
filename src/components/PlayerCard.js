import React, { useState } from 'react'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component'

import {mockData} from '../utils/players'

// example image for testing
const testImg = 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80'


const Card = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 30px;
    & > * {
        margin: 5px 10px;
    }
`;
const Avatar = styled.img`
    background-image: url(${testImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;
const PlayerInfo = styled.div`
    font-weight: 500;
    max-width: 175px;
    p {
        color: #6c757d;
        margin: 0;
    }
    .player-name {
        color: #000;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .time {
        color: #b2aeef;
    }
    .speed {
        color: #85b5eb;
        margin-left: 10px;
        &:before {
            content: '|';
            margin-right: 10px;
        }
    }
`;


function PlayerCard() {

    const [ players, setPlayers ] = useState({items: new Array(20).fill(mockData).flat()})

    console.log(players)

    const fetchMoreData = () => {
        // appending 20 more players to the array 1.5 secs
        setTimeout(() => {
            setPlayers({
            items: players.items.concat(new Array(20).fill(mockData).flat())
          });
        }, 1500);
    };

    return (
        <div>

            <InfiniteScroll
                dataLength={players.items.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                height={100 + 'vh'}
            >
                {players.items.map((i, index) => (

                    <Card key={index}>
                        <span>{index + 1}</span>
                        <Avatar />
                        <PlayerInfo>
                            <p className='player-name'>{i.name}</p>
                            <span className='time'>{i.time}</span>
                            <span className='speed'>{i.speed} km</span>
                            <p>lorem ipsum 00:00:00</p>
                        </PlayerInfo>
                    </Card>
                    
                ))}
            </InfiniteScroll>

        </div>
    )
}


export default PlayerCard
