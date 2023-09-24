import { v4 as uuidv4 } from "uuid";
const chillHop = () => {
    return [
        {
            name: "Road Trips",
            cover: "https://cloudinary-cdn.ffm.to/s--VLjlK_K7--/f_webp/https%3A%2F%2Fimagestore.ffm.to%2Flink%2F01a419312f84729490fad4057601d43b.jpeg",
            artist: "Arbour",
            audio: "https://stream.chillhop.com/mp3/62379",
            color: ["#52706B", "#09090B"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "Daydreams",
            cover: "https://chillhop.com/wp-content/uploads/2023/06/bb0db71fd74f15627e9912ad2278c13cee72ac2d-1024x1024.jpg",
            artist: "Eli Way",
            audio: "https://stream.chillhop.com/mp3/7856",
            color: ["#008881", "#FEFFFF"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Birds Fly Higher Than The Moon",
            cover: "https://i.scdn.co/image/ab67616d0000b2731350fc69ecf7683ad928a06c",
            artist: "Yasper",
            audio: "https://stream.chillhop.com/mp3/9367",
            color: ["#97702C", "#2F3527"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Canção",
            cover: "https://i.scdn.co/image/ab67616d0000b27339dcd686eba5179dd5a9f506",
            audio: "https://stream.chillhop.com/mp3/7961",
            artist: "The BREED",
            color: ["#D64D57", "#FEF9F3"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Sunlit",
            cover: "https://chillhop.com/wp-content/uploads/2023/06/bb0db71fd74f15627e9912ad2278c13cee72ac2d-1024x1024.jpg",
            artist: "Cloudchord, G Mills",
            audio: "https://stream.chillhop.com/mp3/7833",
            color: ["#008881", "#FEFFFF"],
            id: uuidv4(),
            active: false,
        },
        {
            cover: "https://chillhop.com/wp-content/uploads/2023/08/3f5eb74c8d8e36a38baa2f71be53ea5761ed3c6d-1024x1024.jpg",
            name: "Peter's Study - Remix by Toonorth",
            artist: "Toonorth",
            audio: "https://stream.chillhop.com/mp3/43786",
            color: ["#FEC78F", "#70AB9B"],
            id: uuidv4(),
            active: false,
        },
    ];
};
export default chillHop;
