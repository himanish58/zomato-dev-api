import React from 'react';
import { Card, CardMedia, CardTitle, CardText } from 'react-toolbox/lib/card';

let imgUrls = [
    "https://cdn.filestackcontent.com/bTAq9U0ZRDyhmo6r1LoJ","https://cdn.filestackcontent.com/2mxSABeTQQ2gYi3i2pCf","https://cdn.filestackcontent.com/8XU9oneQT76rvTBXi4Rq","https://cdn.filestackcontent.com/QyHeBX5VQ2CnlNEB7nCm","https://cdn.filestackcontent.com/oub6vrkxTFiodJ3hWbQr","https://cdn.filestackcontent.com/xFTbOV7gSGOVHBuvKkwz","https://cdn.filestackcontent.com/l6pVSNWmRTevaznJ5OTq","https://cdn.filestackcontent.com/fnSCf9HtQf2NUc04R2Vf","https://cdn.filestackcontent.com/eSHQH5xfSAes3AfhM98A","https://cdn.filestackcontent.com/kVys3qBLRVGrLBvTwIlx","https://cdn.filestackcontent.com/f8EiiAHJTEqM8vY2V4By","https://cdn.filestackcontent.com/gocCS9ISasmZDc0SbI1A","https://cdn.filestackcontent.com/cdqDciWQwqpAcyKSnqts","https://cdn.filestackcontent.com/BrzBbRdTza9rj32zqCku","https://cdn.filestackcontent.com/0h7UNy6DTqKFxQWZixLp","https://cdn.filestackcontent.com/7R9wQ8JhRauoGTpWnlCO","https://cdn.filestackcontent.com/lk2DSIqERHWeIGRTzSiF","https://cdn.filestackcontent.com/AvTT5JWTSNOi8K5uHRfN","https://cdn.filestackcontent.com/RbwR6q11RrGw1TwMjIp8","https://cdn.filestackcontent.com/Sm4vFrsmRqW9InmPu8bF","https://cdn.filestackcontent.com/6yGKzHS4m45LeooywfUA","https://cdn.filestackcontent.com/HxcfVuH7QnKYOVMhzGXB","https://cdn.filestackcontent.com/H1NwRjRPTcCAblhvTEzi","https://cdn.filestackcontent.com/zPgEoXwjR7eHHNKhlhsj","https://cdn.filestackcontent.com/NaPIR8COQLSqT6CZPpAv","https://cdn.filestackcontent.com/YULDIZjRapGHD0rDbQAi","https://cdn.filestackcontent.com/Fq5b1baIStersDr0GGN0","https://cdn.filestackcontent.com/UDqH3KqBTU27T75nUedN","https://cdn.filestackcontent.com/kkiJqSm2Q7KMJZeVNEmE","https://cdn.filestackcontent.com/CDblSaJkRjGJ0jXncAqe","https://cdn.filestackcontent.com/1ziKNuIPRiBnPtPaB70P","https://cdn.filestackcontent.com/fqj40KjwTiubXreNrqgB","https://cdn.filestackcontent.com/nC2rSxbSDulNubDpg5vQ","https://cdn.filestackcontent.com/VoPl7ixnRZehchnvuEcH","https://cdn.filestackcontent.com/EnOMvZRsQWOEjp3XenXI","https://cdn.filestackcontent.com/YCTJkSoAQ6CXdyKqrCrg","https://cdn.filestackcontent.com/1jyiVj6bRKG0tPySfdoV","https://cdn.filestackcontent.com/MODwUNCRXOkvi3ygCxs1","https://cdn.filestackcontent.com/u1eEtyqBSCGje1YJORYb","https://cdn.filestackcontent.com/LZI5Jv8yQbmGgk5n4O73","https://cdn.filestackcontent.com/GMUgrMQTv6qxONFAwyjV","https://cdn.filestackcontent.com/ORdnDExS56kUE4hrUyz3","https://cdn.filestackcontent.com/BUjiJfwQ2erPWUOMdTIS","https://cdn.filestackcontent.com/yguDUiYSLaQPTzduAo0z","https://cdn.filestackcontent.com/35jA24rdRP6zQ0e0rpTC","https://cdn.filestackcontent.com/Ebl1VxREQhKwSR4hhSnw","https://cdn.filestackcontent.com/TGNKh08iSeS5wSn8lGxW","https://cdn.filestackcontent.com/rjXqdCZUQJOPF7ZVawmd","https://cdn.filestackcontent.com/ovR1lNUhRwiq37R4cXb3","https://cdn.filestackcontent.com/IqaVJW6kSZu7v9TZlVhA","https://cdn.filestackcontent.com/N2xWAQ5T3ymp09V3vrDr","https://cdn.filestackcontent.com/Wje3xN0RWCtvhrj24zAW","https://cdn.filestackcontent.com/qeuF4r0pR6OkjZRk8jRh","https://cdn.filestackcontent.com/ALDZDxhTsWz9TxpcQIUu","https://cdn.filestackcontent.com/QdZjzEzCScudmab2JUrS","https://cdn.filestackcontent.com/v1yueAyRQdiOms3cs3tE","https://cdn.filestackcontent.com/d4uWUsu6TZOiQ06lCwiy","https://cdn.filestackcontent.com/mcvduEiVSZBt8UNwpWYe","https://cdn.filestackcontent.com/2Si8vEgRR0GS429KE4n6","https://cdn.filestackcontent.com/W1LBpNdT1ucFxfwcCC1A","https://cdn.filestackcontent.com/o52O4W1RnypYTU3KJufH","https://cdn.filestackcontent.com/f73uYSPqRNqmknSM0OWy","https://cdn.filestackcontent.com/bGY0ABmSi6bz0Tk56I2h","https://cdn.filestackcontent.com/mWnAbKERS9KbNjL3VQYS","https://cdn.filestackcontent.com/L2PLirClRlO8EUQp60EB","https://cdn.filestackcontent.com/idTGwBW9RGApWFLcTSTc","https://cdn.filestackcontent.com/vFKo5jzWQeqekkm3TZJE","https://cdn.filestackcontent.com/Gb1HtKxET7iyi9VB34Eg","https://cdn.filestackcontent.com/lpIHxTaWT16nS1bjU5uQ","https://cdn.filestackcontent.com/FeKs4EZmQyGFON4D9nLv","https://cdn.filestackcontent.com/N66NgAsShOKqWWxc7Mhu","https://cdn.filestackcontent.com/UfITqpDaRZKXiyDY6irF","https://cdn.filestackcontent.com/YbOcr0jAQ1eqKcHH4dKD","https://cdn.filestackcontent.com/t0j2ZJa5Tbm3TdHel4R5","https://cdn.filestackcontent.com/cQQDzuT4Q5qP1K0ttf9Q","https://cdn.filestackcontent.com/fupuSZOoQJ2Zw2zlrrAV","https://cdn.filestackcontent.com/U8I17t1Rd6vZhgnLmzWu","https://cdn.filestackcontent.com/tAUbuYopT3uweXUXz9CK","https://cdn.filestackcontent.com/IUJocUwRxjnm6L1ZPFAg","https://cdn.filestackcontent.com/dKpv3amSqGMlMmZQxAa4","https://cdn.filestackcontent.com/HWMjXve1TvOjpVRCLGGw","https://cdn.filestackcontent.com/klm2bqoMRIaQtEw9Y7qJ","https://cdn.filestackcontent.com/6uDqpV72T266JGjKmeBI","https://cdn.filestackcontent.com/DEOJ1H7YT56KJomOZiva","https://cdn.filestackcontent.com/XWSf1YOOTWrAkcXUm9Xw","https://cdn.filestackcontent.com/iqNGrb1QPGx3EmtuO7Eq","https://cdn.filestackcontent.com/imB8VNK1Rr2f2oDcME4S","https://cdn.filestackcontent.com/c3f7hAOoQxU3NyU4cnWw","https://cdn.filestackcontent.com/UHVgXVoQWiJ4k2SKz5oA","https://cdn.filestackcontent.com/FmtZi4XhSU2GRzHDjbRH","https://cdn.filestackcontent.com/2TR28jSRMObfPd2K9iXP","https://cdn.filestackcontent.com/dhNsryYASZuSoCetUsoY","https://cdn.filestackcontent.com/lS8DgBtQYiNcay7IH6wO","https://cdn.filestackcontent.com/KazpR5hCTWGv5lOC5xWv","https://cdn.filestackcontent.com/2zKlpoUROaNB4UG4QSuq","https://cdn.filestackcontent.com/FfO8MX1kSxyHR6LeRCJ8","https://cdn.filestackcontent.com/5r1yKjkgQSutwGuwAEfl","https://cdn.filestackcontent.com/sbBY4tnrS7aObjYVCylb","https://cdn.filestackcontent.com/Kn4kXTlQ4KkL11m0F9Jn","https://cdn.filestackcontent.com/M9k3ydtRMeVs5TzCSUBN"
]; 

const Cards = (props) => {
    let restaurant = props.restaurant.restaurant;
    let imgUrl = restaurant.thumb? restaurant.thumb: imgUrls[Math.floor(Math.random() * 100)]
    return (
        <Card style={{width: '325px', margin: '5px', cursor: 'pointer'}} onClick={() => window.location.href = restaurant.url}>
            <CardMedia
            aspectRatio="wide"
            image={imgUrl}
            />
            <CardTitle
            avatar="https://placeimg.com/80/80/animals"
            title={restaurant.name}
            subtitle={restaurant.user_rating.rating_text}
            />
            <CardText>{restaurant.cuisines}</CardText>
            <CardText>{restaurant.location.address}</CardText>
            <CardText>Price: {restaurant.average_cost_for_two}</CardText>
        </Card>
    )
};

export default Cards;