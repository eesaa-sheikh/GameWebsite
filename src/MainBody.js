

export default function MainBody(){

    return <div className="MainBody">
    <h2>Browse our extensive library</h2> <button className="filter">Filter</button>

    <div class="card">


    <div class="Persona5"> 
                <img src="https://i.pinimg.com/640x/e6/6b/cb/e66bcba185c717f114f170e08172d7bd.jpg" width={200} id = "Persona5"></img>
           
                {/* <h3>Parsona 5</h3> */}
                <p> Persona 5 Strikers isn't just a Musou spin-off of the hit JRPG, but an actual continuation of Persona 5, taking place six months after that game's conclusion and reuniting the Phantom Thieves for another adventure; one that takes them across Japan during a summer road trip.

                    <button className="Pbutton"> Buy now</button>

                </p>
             
    </div>


    <div class="SpiderManPS4"> 
                <img src="https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/T45iRN1bhiWcJUzST6UFGBvO.png" width={200} id = "SpiderManPS4"></img>
           
                {/* <h3>Parsona 5</h3> */}

                <p>In the latest adventure in the Marvel’s Spider-Man universe, teenager Miles Morales is adjusting to his new home while following in the footsteps of his mentor. 
                </p>
                

    </div>


    <div class="GodOfWar"> 
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhYYGRgaGBoaGhkYHBoYGhkYGhoZGRgaGhgcIS4lHB4rHxoaJjgmKy8xNTU1GiQ7QDs0Py40NTQBDAwMEA8QHxISHjQrJCs0NDQ0NDQ0NDQ0NDQ9NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EADsQAAIBAgQDBgMGBQQDAQAAAAECEQADBBIhMQVBUSJhcYGRsRMyoQZCUsHR8HKCkuHxFCNishWiwjP/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAoEQACAgICAgIBBAMBAAAAAAAAAQIRAyESMUFRBBMiMnGBwTNhsQX/2gAMAwEAAhEDEQA/AChKsLdEYVUNXrWeIcyVCtXrjUwK1KrzohYbUAWRatFS2tFa3UNjSF2SqlaLkod1adlUDNUZatVTVAUIoZopFVimS0DipFXIrkUxFCK5FXIrhoArUrsVIoArFcy1eKmWgAeWplouWplpWOgUVIouWpFFjoEVrmWjEVzLSsdAstdomWpSsKNN9aqUoxtEVdFqbJoWijIKK9ocqJespaQPefIDsoBZm7gBz/elTKaS2XGEpOkhRrXOufDrlrjeEJgtdXvdRH/rJHpTOIQB8qZiDGUtHanYqRup5GpWRPRbwySsGq0wpnSuY9rOGA+O7Z2BIRBJ0MGTt7edc4XiLGIkWnYONSjgSB1EbidJG3TaoeVFxwyCaAEnlQyquCfljrsfDpVXYC4lt8wlwOzBgkwp15SQa5xi7hsO4t3LlwMVzwqSNyBqO9aylkaejWOFNbL2sKjHVjEbjkemtI42xkcqTMbHqORrTwi27yBsPcD5d8ylN/usNwd9Yg1mY/FzKP8AdnyIB59NKUc8lL8ui5fHi4/j2Ku4AkmANSTSL8RTlr4Vn4nEG4+QTEeGu+Y9Ypi3hFXfU9/6Vf3TySrHVLyzoXxMHx4KXyG23tJf2FTia8xH15ka00l5TqCDSNy0p3A8tDSYm025IOs6ajp4iRT+3Ji3OmvflCXx/jfJTWFNT8J9M3M1TNReC2rV11tO1xXYEqyhShAEkSdQY16V3jGFWzca2pc5YkvAmQCCscoMa8wa6Vli3R5jwyXYEGu5abx3DGtWkuE6tGZfw5tR+h76Xw72hauXLhuAJlkoFIJcwqrJnNMd2tDyqrBYZXRTJXYomAtG66osgMecSq7knlIFOcX4f8FlAJKkbneQYI9vWjmroX1urM8VaKLhAhdVcsAxCysaE8zPKtDitrDYZlS7dcFwSCEkQDBmAamWWMXTKjilJWjKy1yK1OIYEIqurZkaIPPUSD3jes6KqMlJWiZRcXTBkVIouWuEUybBxXa7FSix2ejZQaotmDVkuA86OmWubnRvwsWuIqDO57IIBjXfQT3TS/EraYgoxDZANFYZYYwSY31BFPYvDB0K693iNvrXn8HjzZY23Tsz2ogGR95dgJO4ispSuSbN4xXFpaYbE8Nw0ZSUQ95VTrtufrU4aUw7KrPIXNlCkMQdTrlOgmaDxJrTsrq7ZwpEFViNtTJ68xTuG4WGXOohsq7jQkCdvOD51Ln6KWOkmwXErS37huMCQQAoYQRGhkeINUwWES1dS6qxkmYG6lSCI570PDcRRAUuI4C/KRlJU8xl0lefKNape4qjyqK51iCMpI02gkDxPTajkuI3F8rHMbxG02JRhnAEEqVg6HsQu5zEx5UXiduziXLgEsFgFhl0kgROp1mscWgrG9cIUaciRGyiB71y5xHDwq/FeV6LOaNRDMync9OVRK2qNItbY9wmyuGuF9QuUhgBMyRGnc0a95qnFTnF1gJkMRMAnTQHp0pb/wAr8ZlVVP4jmEgxs0g76zliN5mtJLMLH96ybaVGsGlKzzfBLSkvGphY8NZ/LXn3VtcQe4jqto5VyW8iZFIusWGfOSDPZJ58hXn0Y4fEMAvZGpWR8h5+X5Vv2Wa4pNq62Q7qrMNd9V5U8OSlxfg6Pn4W8n2x2ml/BfGYhVW4Ec2gMQqAoi3IlMzIAxiMx8jXneKkkAse0WLePWByGta2QopzuVQa5ZIWf4diaxcQrX7gCjsRoddFgEk95ke3I1rkn+Lj22Y/DhWVZJaStt/0O8JulGtOBJVhE6SDK8u416DieJR74vMGyIpLiNSbZEJHeWUeE9Ky3swNOW3ltVrl7OCimRmDMNRDZR2dd4JOv5aVrTVJeqOKU4ycnXbsd4bxwXsNcS+SHLvBgkAOcyAkaDKTAJjRRSFxwLKW41Zzcf8Al7Cj6E+VVsYcIxJMKymTroRqDAOu0eZph8jHOWypAhiCdAJ+UcyacfxdPrsmTUo2u+ijXjbw9xgDnuKbdsj7o0ztPIxse41oXuJJiMPbmRdA2gkMQBn7cRsJjeYpJ3S4R8NiUQZRIIPXNGwmSaGtxLQgvlbPnQZWiPvZmB2mNIOx0M0Sb/UgjV8H6C8PuotxWeYBkRqS2ygDxNM8bvYXEur3HcKibZcmYE9qHJhdd9KTsYmzIuFyEUzAVic2hCfXfoKRcKQCj5mWcyiYZGgEZtJiPHbpNE25NNegx1GLT9mri+MNefILfw7aGFUwSZGhkEjLlIiJ335CiiqYUCAo1Edlu7cqx6zt5+AaZFgENJ5iCI8+da4pLjSOfPFqVsETQ2aiMaUuXK1MTuepQM1coHRqpix1FHXGrWHYTNMNoO6jfC551jvNcTZ3cTaTiQHM1L+JtP8AMuvWvOveIkZ10764LzxMqR5UtDRtXkt5SUHa5HX61pcGx4yCAehn8QAB8dt68muKcco8qImOfkfQUUh26PWY3D2XPaUT11oFrh9pNlrz6cQedSfU04/FZTLG+57qXF+Av2NcQCPKfdGh8axm4Za17PnTSXZ5ae5qG4T+grTjoy5OxvB2UGQINj2uhXlpvOuvhTmPtX17VoW2HNXlT5MNPIiksAGV1Yqcu53AiOtNXMcSCPbbw/vWMoW9HTDNxVtHluKY+8/Yu4UQNiA5PPVXXas3DYfEIwYW7qajWCmkg/eifrXu04TedPiBGK7zIkjqFJk+QquMOe2jcwSp6dkDL9KzeFN9nZD/ANCUYtKKX/DxeMs37jLKOTAAAObWTtqeUUzgL99AqLYdV5xbdSxPNmKtr4D+3o8Fo4ivUKmcBhzE6U/pqWmxP57lDi4Jr0eVwFq42twKBEZQjKZ0M5i2ojT5RTq4IDYVuHCd1dOErrjSR5OVuUrSr9jEbBgiCKo+CUjLGg5VunDUF8P3VVpmT5IxrOCRAQoiTNDxPD0f5hNbDWKE1ruqlRD5WYv/AI1AuWNJnzrlvh6JJVYmtdkoF0RVaFswMZgW3Q+X72q+GxZKl3AUyAYmMxnrO+Un1pjHXcqk89q8/euVLqLtdmseUlT6NbE4rK2Q6EaEHQg9DSl3EKOdZVy4dTPnSz3jU/c0UsKNj/VL+L3qVg/FqUfey/pRqJcI0pk4liIhQOcAa0EWqIto91YmrYFzOvttXFnvpoW6sUpkgkvkbknuNP2+IIF+Qz1pVkFVgUcR8qGbuJQ7SPLah2rZJ60NU1puzpTSomTbG8LhyY79q0VsG1chwNMw66wY2749a5we1nuouoGZSY0gDU+1aOLvI5dxp2gYMajQCIA6ehqXJt0OMaVmfijosbFQTvuNNe+lrt0IjMeQJ68qaRQ3ykHXlqNNOXOs3it0ANbIZc6lVZlIQlhGjHelJqK7Gk5PorgOL3CCpvorQps5kZszowJ+IwH4c25gHWtgPLMGj/ch5WQocidAdhLEenSvHYNVXOlzsuogaxppqI36/wCK9JbcsikiNBHXLynvisMW5M3yOoJehzDKqus7Zhm/hmGHpXp8Fa1ZJEaMh6j9x4RXk0BJ769lw/iCgAkQcoBG40ESOnKryWuhYqfYPFK6a7CP2aRbiEbzT2LDE5kb225jw5VkYhQxgjKfQf2pwnrYskNjQ4gD0866cUp+8tY9zDEczQwkVqpWYOJuK6np5VW8BWWl2Ks+IqkzOUQlx6z8Tcq167WdfvRWkSOIjxK7PlM1iXGpzF3ZnvJpFz9KiTtm0Y0gN5oFKO9EutNCZR41mzRA89SueVSpKPYKlXyCoGqrGrMyrNQWvaVy6/IUILTsKCB5roWqKlFRaLCiyLNMohrlsVoYak2CRpcJsskPMA9kr1U+HOY3pf7Q4k4a38RVzIXCsfwg7EruRIG3WmbLNtyrE+3Lv8JEA7B7RaZ1XQKV3jWZ/Ss7d2U1ejJw3Ef9Lc+Kpz2bhl8kaOTOZRtB2/wK9hgON4bEoyCXBEFGUiQdN203J8OvOvkj3WVSFchW0IBjxouDxjqQVLCNBB1jpqDWEo3s3g60fRsf9miiqwkoDzlnQE/KxjtDvG31r1OL4WlztYcqWgHICIYRup2B7q+c4Di+JMFFunKB8oLgAdUWFHjFbnDftSJDsoV1kkpz3ksp1jruRvtNRGUoO0bSipKmPMpRiGBVgYIOhBphcYwG+lU4tjlvOLifeQT4gkewpVXrsVSVnG7i6NNOIV3/AFqtof1rOImkLzu19LCMELDM1xlzgCSAAsiToaiSjFWy4uU3xR6I5Y0pS8tOJwprVti95HgjKQCCVOhkSYg953pO7cFLHJSVoMkXF0xcmKG9yh4i7Sb3dDW6Odlr9+szEXia7iLvr7VmXMWQdNxzqnKgUQtwfvnStwVdL7NMgR5fpQXNQ2WkBcigtRrtKs1SUdqUPN3V2kB7UJXLyaU0UqrW5MEx3mqsRnLbq4tU0EFXCii0MVFurpZJpgkV1boFJyBIluxWlhcMf80rbxIG+3PrXX4mEHtUuTDijcRURVY6zGnjXmPtfjkZ2ymVQ5B0IB1b1PtQOIcYco5Bg5SF7uWleXtuXKJqczqpA10JgkAc4nXurOSfkuLF+I8OcBLpRglyShj5gOfny6xNNYayEK51IGkyDsde7cV9L+0OKtvgL3xFReywQadlzpbydIYjy7q+TjFuoGZ30hVEyuXciDI5zUptou1aaPrv2f43aRAqXABHyMoEHXmu9Zn24wCOn+rtqq3VPbCkBbinSHU7t0O+vOvMcI4iV7DupUbdkATEwCNvQ0/i+Jl7eVlTUTmnXMkMQRHWN++KzcjojHez0ww6Jh7D5cue2uYbkPuZM7x7GktBsZ6UlwTjqPY+HcIyiMp5qAYLQOgPvWhbAk9xYeasVP1BrfFNPRy5oOLt+Q1mSPCs7itgI3xXGZSApU+Zieh9/GttLsDkK8/9snKogkhSQW7yQSpPdPL/ADRmf4uww6kqNfCZLif7NkSoi2VVQUtlg7KxV2O5O4XevP2uKs7lMhXX734evrRuFfaY4awUtHtuV+HMBZMS792/06Uxc+0tq8TZuFVYEqbhAZy5BIAYqIGh2I1ETqKxg5RidT4Sm7V69iGLxWulZ3+tRjlDoWJ2zrv0md+6j8Ywb2s0iV+64ByMDoDPLfavEKwDMJy6GD3846HX6V1PIqtHEsTumewESwLrmXcb/XYnwJpO8pWH07Wo8uvrSvDLpHy25VpBYgLC5YBUeJJ06DpRbzSF8B7AUQlJ3Y5xikq/kt8WeQ8qFdY1FIE660F71W2QkCuMTQoorOKGWqLGV1rtVzV2lY6Pot1opG5dqty/SzvVULkFN6qi7NLFtKGXAjmaGhch17pUkEQeYIg/WlMW5dcoJXXca+RHOjYzEZgrEbDL+YodsyrNKgCBHMkzEDyqatbKjJ9oRS1eE5bpPcwIHrJ9q7hsaGfJdJRhzPynz/Pbwo9t5JJ2AJMkDbkJ3MxSLW1fRv7jwPKhxrorly7NDH2QqNqTtt4ileBsvx0YiMocg5jqYy//AEaXcXEUoXDI0AExpBBAIPhyruGtohVySZlY2EEQfeaz/ccY6aRX7SY8Xbpy6qqgLrInmQOU9ecCsvC3WVwVJ6EQGzDTQq2hHcati5BIgDvEEfykbinOBYR7hBRM4UhW7SoROqspLDteFPuI64mrhsVZghrWVgYKqvzHUaZez15COWtP4W7ajsWDrOrkAbbKFUMQI2rLXCsl50uowiSquDszv2gG3BAkHbU9a0Ld4IIUKumuURJneRqdxXLKJ1RdUZFhzYcEkZHM5hIKsPntiPl326EV6nhOIMspZiCA65o3+Vx9EP8ANXncReZrd1BLB3zJARiHXK57wO8b67xTuBxCLcAUglUKEzzIRzpp+EenfW0FtNGOa6afg9Hh8UGYKQ+pIGWJkd1ZHHb3xDGgUE23mDB7IB55dwZ050PD33DqQTIYEEbggzM1j3rztiLyT2XzZmPyqDz6ajT0reaVHNC7sAGktcDbdlN9F2zL30DDcPbEXXCsFCo9yWk6KBpHU0fFYcD5XBUDsoYJgf8AKe/2q/2ffV9QBlO2kxrE/e8ANp2rFypWdEY8nSFVw95DlzHIfmysSsAGAR0kzEUrYs/7hYjQakE5SRzE8vGtp7ktvMnTlvoNKx8ZbdiqpuxPkBB8h2vpWkkiYN2b9zGped7gGTsr2AQw0TLoenZms8N6UlYw4TWST1nTv0orMYpxtKmRNpvQdmFBdqGxoTmmQkFKUPLXM9cz0h0Wy1KpPjUoGene8N6A2KoTa7UMJ1rUigoxE8jQ3fWoqqDM6VR7gmRQwQytzQjn+VD+JQ0u6+v51SSedAUM3W25c/qaXcqO+pf0IH/Ffb+9CYzSaBBmcMMhEjegDBJ3x47HrVLdwZyJ1j2itPC3oRxlUncSJ02YehnyqEkyra6MW5eQNkcFlAiVyq3dJjUjaTWlw5bdr/dR86sApQkB0IOmcDSDyM8zPdk3sOSSep5/r5UPEpkCwd51HTY+9Ip09GxgsWzsXdpYgiJmAGaFBPIDamWxAKmSBOnnB/LWsTCvCxpzijuxgfxTroNoiTp10rBxts6ISqgtksLiAmNZkdwkfp609gbTgkvv5Hnvp3VngAkGdQZldfHan/8AUkSQhPico8+fpW+NKtmOaTb/AHGMRedAuQSzkqvdpJY+AoBQKpRDmn52mZbmJ56TtMedL/DzH4lwyATlTWCSIjUkkbUjfxstE9wGwA/IaUSum2KK6SejlzBNlz5FymSDOsciRPTWq4LElXUjbnpMrzpzidybFrcBlWBO4ygk+G1Y9vMWAXcmB++lZcFRt9rN90hXfkIy89JDe0etDsPHpAmOcfpRsUwWwUknQiep3JNIo++2h258zVT2icemRm5VRqtmqprSzAqapVmNUJoBHDVZrhaqlqBls3fUqtSgDZBI1qrXqOljNJmOtUe0AJq7JAv1oTCrsNaLbwrtsjHwBNMV0DttTNqDHfQ/gkciPGjLakgDn0qkhNlMee36ewpVTTONQ5yOkewoa24BY7AEnwGppNAnozEP+4T3kflWnhr7IQw1A/xBrIZWDEHRp26E6itbH2FARkkgBg5iBnnkCAQOUHURWSdGjjZdPhu022hjMo0SPDqO+svH2ybpQ/dgeQE0EW532pnD2NyAYiP1otN1Q+PFXZZrXSPPXzpN1IfU66a1qJYY8qU4ikMPCnKCWxRm3oZsKoIPPX29KN8WV86UwiksBqSZgDfY8qbGGYQCCPERTx3ROSrEMXiieztG1AtWxlLc/am8dhiFDDkNfCl8MeVJqnsrla0UZXbKCScohZ5CfpvRcHCdptzoPDnRLzZRtqdB+p7hSUHcnT8v1rNvwaRTe2aOMvSh15e5oIcevvFLXbnZ15keQkQPQUM3I/fdUstaZoiukVxE0HgKnwzWiOd9gytRU5mrm3XHSmxlCorgiKsBXSp3ExH78aQAvh99Suwf3NSgDWsq7iLbJcn7qMA58EaHJ8FoWKS4h/3EdP41ZP8AtFAvcNRR/wDpbbuXOfdQKthsVet6W71xB0R3Vf6QYquNE8ovpjOHxKjb8q3+FcbRIzFgRzWD9JrzbcSvH5xaufx2reb+tVD/APtVTiliDYUH8Vt3EfyuX96rkQ4KXk+ln7SYC8uS+kiNGyywP8QM15Xjd3DW2VrBZ0MzIKsu0dx566Vh2zaIHbuIZ1zIrLHUMrT5ZasLM7Oh8ZHuKaetCWOmETGzuoIOxmPc678qLxJEKFElZCknRw0alZX5Rmg89q5bwU23OUFpERDQOZGWs64Cu6R/ED+dLfs0pd0FtW3JSUDKpBG5U7zqDPTnyFK4zEks4AhWYnKCSNweeu4o+HxTgELInpVMU8rEDeTpqfOo4rstNmejGtfAYxAgUyDvqDEnoRP1ArLVSTt+laos5YAiObZZEc9WEf5ojp2OW1Q5bxCnaG/hM+sDSszjt4M6EAABIga6yZP1HpTWNQGAe0FAUMIBXcgADQgfnWdfQ82zchrJFU5WqM1GnYbhOJ+HcRyASDsw01EeY1r02O+0BuAK4QgbQCCPOa8paWN/TrR1QEGc47xDDzmI9aIvignFSdmld4gkHsLt3/rXm0uZHDaaHb8qZxN8JopJmDJWP1n1is13kzUSnZpCFLYe7eLtmO5+nhVSQfAfU0MmuExUGtnWaSKq9dXU611VkjxpUKzXW/A0qfHJGg/fjQg/QAfXz1qrqTvJ8TWmzKkEa6vMieQAzH12+tUNxP8AmfIL9cxjnyNCyVcLTDR18RoAEAI+8ZYn17P0nTego5kkkyauaqRSGX+MepqUOpQFI2Twq5+Az00Huag4Xd/Afpr6nWtRXujWP+nsRTNjGXANMw809slbtR/2civzRgnAP+A+ldTCuPuN/TXo34jdP3onecn07FdXHXNi5j+U/TLRxRSlR59ME5k5W9DVhgH6esj8q9KnEXGyg/yj9KBexhY6ov8ATSaGpGKnCzzI8p/WqM7WzBdgOUMSK1nxB6Uvi8rqVfbx27weRpUi1KvJnviEO7rHemvqtBvLZO7D+Uv7MDWFjUKMVDZhyI/e9AF01m2jVKz0TWbMSLo9D70MYtF0zjyBNYJuGqZqXIfE3rvEbcRqf5QPQSYpW9xNDshPiwE+MKJrKJqtLkwUUaH/AJM8kQerf9iRRHvs/wAxnoNgPBRoPKs+2tOpEGTRdlUhd+esfXyqhqO1czVLGdFQVya6KAOrTFhTO1DtxTuFSZNNEyeixQ9KsLZouQ1JI5iqsgCynpVYNMG7VC4osEBy1RhR81c0oAXqUfKKlAWbqqR+HyBognu+tQWjXfgnpW1HLyOpHUD1/KimOoPgD+YoBsnpXQh6U6YrCBu/3qpI6+9UKd1UIjlQFhHdVBJbQeNY2OxefRfl89fGtR1zAgjesfE2XQxy5HkamTpFxpsy7yEmhmyacOarAmsrN06M8oarlrRZaEyGkWpCeWrBKIynpUCGkOztsxXbzzUNs9KGyGgLKxXQB0rqoauFNA7K69K4s9KaRaYS33UUKxOyk6Vu4WyigDtTz0B1q2Aw2UhiBPLup10nWB4xVJUZylehW5k5g/0x7UE4dCwVZ16z+tOvZJ/x/aqfAI5e36UyTOu2lVip3BIOx26Gp8Jejfvyp17Z6H9+VCcH9mlQCjWh31QoOh/flR2RujeRqlwHmG9T+lFDsF8PuPoalcnxqUAeuW2f+J/mFFOHf8HsfyrTyDuq+U91eqvjL2eX9xjtYYbr7D8qGTl39wa1LmFzcx/SK4mBA5nyC/mKzlgldItZUZDuOp8/7UIjoRWze4dP3o9D7Vn4nClDG461hPFKKtrRpGcZaQtkPdVssiDqK6Zqq68wNOftWVlmfieG80PkfyNZlywQYNegZqUx1ssum49YrOUV4NIyfkxsprhBosxVWFQa2CIroFWy13LQVZUia5lq2WpFILJ8KoLNXSaKoNKxciJYrSwVhImNR1pRENOWFIM01ImUl7HFUUSKqhq81oRyJE0O4h5AGihv3FRn8aYchO4h6D1Ipdx19z+lOuaA4pDTEnT/AIk+BNDKc8nvPvTpFVPl9KB2I5f+A+tSnp/cCpQFntRtVRUqV7qPHLrVWqVKXkrwUTek+Lfd8TUqVHyf8ZWL9SMtqE21dqV5J2gxXBUqUijDauCpUrM2KmoKlSgZDUFSpSAItFSpUqGQxm3TaVKlSYSGFq9SpXQivBdKrUqVQij0tcqVKTLQI1WpUpFEqVKlAH//2Q==" width={200} id = "OfWar"></img>
           
                {/* <h3>Parsona 5</h3> */}
<p>Kratos was born in Sparta, and is the demigod son of King of the Gods named Zeus, and mortal mother named Callisto with incredible immense superhuman godly powers and combat abilities and is later the God by becoming the God of War after defeating the original God of War named Ares.
</p>


    </div>



    <div class="Persona5"> 
                <img src="https://i.pinimg.com/640x/e6/6b/cb/e66bcba185c717f114f170e08172d7bd.jpg" width={200} id = "Persona5"></img>
           
                {/* <h3>Parsona 5</h3> */}
                <p> Persona 5 Strikers isn't just a Musou spin-off of the hit JRPG, but an actual continuation of Persona 5, taking place six months after that game's conclusion and reuniting the Phantom Thieves for another adventure; one that takes them across Japan during a summer road trip.

                </p>
                

    </div>


    <div class="SpiderManPS4"> 
                <img src="https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/T45iRN1bhiWcJUzST6UFGBvO.png" width={200} id = "SpiderManPS4"></img>
           
                {/* <h3>Parsona 5</h3> */}

                <p>In the latest adventure in the Marvel’s Spider-Man universe, teenager Miles Morales is adjusting to his new home while following in the footsteps of his mentor. 
                </p>


    </div>


    <div class="Persona5"> 
                <img src="https://i.pinimg.com/640x/e6/6b/cb/e66bcba185c717f114f170e08172d7bd.jpg" width={200} id = "Persona5"></img>
           
                {/* <h3>Parsona 5</h3> */}
                <p> Persona 5 Strikers isn't just a Musou spin-off of the hit JRPG, but an actual continuation of Persona 5, taking place six months after that game's conclusion and reuniting the Phantom Thieves for another adventure; one that takes them across Japan during a summer road trip.

                </p>


             
    </div>


    <div class="SpiderManPS4"> 
                <img src="https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/T45iRN1bhiWcJUzST6UFGBvO.png" width={200} id = "SpiderManPS4"></img>
           
                {/* <h3>Parsona 5</h3> */}

                <p>In the latest adventure in the Marvel’s Spider-Man universe, teenager Miles Morales is adjusting to his new home while following in the footsteps of his mentor. 
                </p>


    </div>


    <div class="SpiderManPS4"> 
                <img src="https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/T45iRN1bhiWcJUzST6UFGBvO.png" width={200} id = "SpiderManPS4"></img>
           
                {/* <h3>Parsona 5</h3> */}

                <p>In the latest adventure in the Marvel’s Spider-Man universe, teenager Miles Morales is adjusting to his new home while following in the footsteps of his mentor. 
                </p>

    </div>


    <div class="GodOfWar"> 
                <img src="data:image/jpeg;base64,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" width={200} id = "OfWar"></img>
           
                {/* <h3>Parsona 5</h3> */}
<p>Kratos was born in Sparta, and is the demigod son of King of the Gods named Zeus, and mortal mother named Callisto with incredible immense superhuman godly powers and combat abilities and is later the God by becoming the God of War after defeating the original God of War named Ares.</p>

    </div>



    <div class="Persona5"> 
                <img src="https://i.pinimg.com/640x/e6/6b/cb/e66bcba185c717f114f170e08172d7bd.jpg" width={200} id = "Persona5"></img>
           
                {/* <h3>Parsona 5</h3> */}
                <p> Persona 5 Strikers isn't just a Musou spin-off of the hit JRPG, but an actual continuation of Persona 5, taking place six months after that game's conclusion and reuniting the Phantom Thieves for another adventure; one that takes them across Japan during a summer road trip.

                </p>

             
    </div>


    <div class="SpiderManPS4"> 
                <img src="https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/T45iRN1bhiWcJUzST6UFGBvO.png" width={200} id = "SpiderManPS4"></img>
           
                {/* <h3>Parsona 5</h3> */}

                <p>In the latest adventure in the Marvel’s Spider-Man universe, teenager Miles Morales is adjusting to his new home while following in the footsteps of his mentor. 
                </p>

    </div>


    <div class="Persona5"> 
                <img src="https://i.pinimg.com/640x/e6/6b/cb/e66bcba185c717f114f170e08172d7bd.jpg" width={200} id = "Persona5"></img>
           
                {/* <h3>Parsona 5</h3> */}
                <p> Persona 5 Strikers isn't just a Musou spin-off of the hit JRPG, but an actual continuation of Persona 5, taking place six months after that game's conclusion and reuniting the Phantom Thieves for another adventure; one that takes them across Japan during a summer road trip.

                </p>

             
    </div>


    <div class="SpiderManPS4"> 
                <img src="https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/T45iRN1bhiWcJUzST6UFGBvO.png" width={200} id = "SpiderManPS4"></img>
           
                {/* <h3>Parsona 5</h3> */}

                <p>In the latest adventure in the Marvel’s Spider-Man universe, teenager Miles Morales is adjusting to his new home while following in the footsteps of his mentor. 
                </p>

    </div>

               
                           </div>


    </div>

}