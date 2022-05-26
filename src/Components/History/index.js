import React from 'react'

import './index.css'

import taktak from '../../Assets/Images/taktak.jpg'
import simplus from '../../Assets/Images/simplus.jpg'
import trawaTelefony from '../../Assets/Images/trawa-telefony.jpg'

const History = () => {
  return (
    <section className='history'>
        <h2 className='history-title'>Historia</h2>
        <article className='history-article'>
            <div className='history-img-box'>
                <div className='img-box-img'>
                    <img src={taktak} alt="Taktak" />
                </div>
            </div>
            <p className='history-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus est, bibendum non odio in, ornare dignissim nulla. Ut in convallis nulla. Quisque at blandit ex. Proin id mattis erat, et tempus felis. Quisque in leo interdum, tempor metus quis, volutpat urna. Ut tincidunt tortor eu rhoncus gravida. Sed eleifend hendrerit elit non bibendum. In ac sapien ut tortor vehicula iaculis. Nulla id suscipit neque, in ultrices mauris. Mauris sagittis odio nec lectus feugiat, et vehicula ante aliquet. Aliquam sapien nunc, imperdiet eu scelerisque nec, luctus eu velit. Mauris neque dolor, pulvinar in posuere et, dictum ac tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc et mi eget erat laoreet condimentum. Donec ac neque sed lorem iaculis lobortis in sit amet nunc.

Integer eu massa augue. Morbi pellentesque odio id elit tristique, quis maximus quam tincidunt. Praesent tempor cursus dolor, non sollicitudin mauris dignissim eu. Phasellus volutpat facilisis lacus nec fringilla. Etiam hendrerit.
            </p>
        </article>
        <article className='history-article reverse'>
            <p className='history-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus est, bibendum non odio in, ornare dignissim nulla. Ut in convallis nulla. Quisque at blandit ex. Proin id mattis erat, et tempus felis. Quisque in leo interdum, tempor metus quis, volutpat urna. Ut tincidunt tortor eu rhoncus gravida. Sed eleifend hendrerit elit non bibendum. In ac sapien ut tortor vehicula iaculis. Nulla id suscipit neque, in ultrices mauris. Mauris sagittis odio nec lectus feugiat, et vehicula ante aliquet. Aliquam sapien nunc, imperdiet eu scelerisque nec, luctus eu velit. Mauris neque dolor, pulvinar in posuere et, dictum ac tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc et mi eget erat laoreet condimentum. Donec ac neque sed lorem iaculis lobortis in sit amet nunc.

Integer eu massa augue. Morbi pellentesque odio id elit tristique, quis maximus quam tincidunt. Praesent tempor cursus dolor, non sollicitudin mauris dignissim eu. Phasellus volutpat facilisis lacus nec fringilla. Etiam hendrerit.
            </p>
            <div className='history-img-box small'>
                <div className='img-box-img'>
                    <img src={simplus} alt="Simplus" />
                </div>
                <div className='img-box-img'>
                    <img src={trawaTelefony} alt="trawa Telefony" />
                </div>
            </div>
        </article>
    </section>
  )
}

export default History