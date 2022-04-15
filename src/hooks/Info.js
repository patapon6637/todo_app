import React, {useState, useEffect} from 'react';

function Info(props) {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(()=>{
        console.log("렌더링이 완료되었습니다");
        console.log({name, nickname});
    }, [name,nickname]); // []안 공백으로 두면 componentDidMount 아니면 componentDidUpdate

    const onChangeName = (e) =>{
        setName(e.target.value);
    }
    const onChangeNickname = (e)=>{
        setNickname(e.target.value);
    }

    return (
        <div>
            <div>Info</div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                <div><b>이름:</b> {name}</div>
                <div><b>닉네임:</b> {nickname}</div>
            </div>
        </div>
    );
}

export default Info;