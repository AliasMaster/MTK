import React from 'react'

import './index.css'

import history1 from '../../Assets/Images/history1.jpg'
import history2 from '../../Assets/Images/history2.jpg'
import history3 from '../../Assets/Images/history3.jpg'

const History = () => {
  return (
    <section className='history'>
        <h2 className='history-title'>Historia</h2>
        <article className='history-article'>
            <div className='history-img-box'>
                <div className='img-box-img'>
                    <img src={history1} alt="Taktak" />
                </div>
            </div>
            <div className='history-text'>
                <p>
                    Mania zbierania zaczęła się od telefonu mojego ojca, który w 1994 roku nabył telefon Maxon HP450. Reklamowany był jako "telefon kieszonkowy", ale w żadną kieszeń się nie mieścił. W roku 1998 zamienił go na nowszy telefon - Motorolę D520. Maxona dostałem ja - był to pierwszy telefon odłożony na przysłowiową "półkę". Swój osobisty telefon dostałem w 1999 roku. Był to malutki Siemens C25. Poza funkcją wykonywania połączeń, można było pisać sms :) 
                </p>
                <p>
                    Następnie były kolejne modele, które musiałem mieć od razu po wprowadzeniu ich do sprzedaży. Były to Nokia 3210, 3310 i 7110. Później jakoś to poszło... Modeli telefonów było coraz więcej, więc było w czym wybierać. Skupiłem się głównie na Nokiach, gdyż były najbardziej wytrzymałe. W  tym czasie na wspomnianej "półce" pojawiały się kolejne telefony, które głównie wyszukiwałem na giełdach. Czasem wpadło coś od znajomych, którzy już wiedzieli co się święci. W niecałe dwa, trzy lata kolekcja powiększyła się do około 50-ciu modeli. Wraz z wygaszaniem technologii, w której działały pierwsze telefony stawały się one bezużyteczne, a to powodowało jeszcze większy przyrost ilości modeli w kolekcji. 
                </p>
                <p>
                    Obecnie kolekcja liczy około tysiąca telefonów, w tym wiele wraz z oryginalnymi zestawami, z jakimi je sprzedawano. Przyrasta już nie w tak szybkim tempie, gdyż ciężko jest znaleźć model, którego nie mam. Nie poddaję się i kolekcje poszerzam też o akcesoria z tamtych lat związane z telefonami.
                </p>
            </div>
        </article>
        <article className='history-article reverse'>
            <div className='history-img-box small'>
                <div className='img-box-img'>
                    <img src={history2} alt="Simplus" />
                </div>
                <div className='img-box-img'>
                    <img src={history3} alt="trawa Telefony" />
                </div>
            </div>
        </article>
    </section>
  )
}

export default History