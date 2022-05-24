export class Animes {

    get() : AnimeInterface[]
    {
        return [
           {
               title: "86",
               openings: [
                   "https://animethemes.moe/video/86S2-OP1.webm"
               ]
           },
           {
                title: "AldnoahZero",
                openings: [
                    "https://animethemes.moe/video/AldnoahZero-OP1.webm"
                ]
           },
           {
               title: "Ansatsu Kyoushitsu",
               openings: [
                    "https://animethemes.moe/video/AnsatsuKyoushitsu-OP1.webm",
                    "https://animethemes.moe/video/AnsatsuKyoushitsuS2-OP1.webm"
               ]
           }
        ]
    }
}

export interface AnimeInterface {
    title: string,
    openings: Array<string>
}