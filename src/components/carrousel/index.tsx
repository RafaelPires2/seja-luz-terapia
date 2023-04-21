import React, { useState } from 'react';
import './styles.css';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export default function App() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className='carrousel-wrapper'>
      <div className='navigation-wrapper'>
        <div ref={sliderRef} className='keen-slider'>
          <div className='keen-slider__slide number-slide1 '>
            <div className='container-profile'>
              <div className='content-profile'>
                <div className='text-profile'>
                  <h3>Juliana Siqueira</h3>
                  <p>TERAPIA CRIATIVA TRANSPESSOAL - PROFESSORA - SANTANA/SP</p>
                </div>
              </div>
              <p className='profile-description'>
                "Vá, estou muito feliz por ter feito a terapia criativa transpessoal com você. Foi uma experiência única que me ajudou a
                olhar para dentro de mim de uma forma nova e profunda. Me sinto mais inspirada e motivada para explorar minha mente e
                emoções. Muito obrigada por compartilhar sua expertise e me ajudar em minha jornada de autoconhecimento!"
              </p>
            </div>
          </div>
          <div className='keen-slider__slide number-slide2'>
            <div className='container-slide'>
              <div className='container-profile'>
                <div className='content-profile'>
                  <div className='text-profile'>
                    <h3>Vitória Pitta</h3>
                    <p>REIKI - ANALISTA DE DADOS - TRÊS PONTES/MG</p>
                  </div>
                </div>
                <p className='profile-description'>
                  "Vá, eu simplesmente não consigo encontrar palavras para expressar minha gratidão pela experiência de Reiki que tive com
                  você. Foi uma jornada de cura profunda e renovadora para minha mente, corpo e alma. Senti uma sensação de paz e equilíbrio
                  que há muito tempo não sentia. Obrigada por compartilhar seu dom de cura comigo e me ajudar em minha jornada de bem-estar.
                  Sou imensamente grata por ter tido essa experiência única!"
                </p>
              </div>
            </div>
          </div>
          <div className='keen-slider__slide number-slide3'>
            <div className='container-slide'>
              <div className='container-profile'>
                <div className='content-profile'>
                  <div className='text-profile'>
                    <h3>Graziella Novaes</h3>
                    <p>TCT - PERSONAL TRAINER - MOGI DAS CRUZES/SP</p>
                  </div>
                </div>
                <p className='profile-description'>
                  "Quero expressar minha gratidão a você! Vá, MUITO OBRIGADA!! A terapia criativa transpessoal foi incrível. Foi uma
                  experiência poderosa que me permitiu acessar partes de mim mesmo que eu nem sabia que existiam. me mais empoderada e
                  confiante em minha jornada de autodescoberta. Obrigada por sua dedicação e habilidades como terapeuta!"
                </p>
              </div>
            </div>
          </div>
          <div className='keen-slider__slide number-slide4'>
            <div className='container-slide'>
              <div className='container-profile'>
                <div className='content-profile'>
                  <div className='text-profile'>
                    <h3>Renata Ferreira da Silva</h3>
                    <p>REIKI - ADVOGADA - PORTO SEGURO/BA</p>
                  </div>
                </div>
                <p className='profile-description'>
                  "Oiiii Vá, estou emocionada com a experiência de Reiki que tive com você. Foi uma jornada de autocuidado e autocura que me
                  ajudou a me reconectar com minha essência interior. Senti uma sensação profunda de paz e clareza durante a sessão, e
                  continuo me sentindo mais equilibrada e centrada após a experiência. Muito obrigada por compartilhar sua habilidade e
                  cuidado comigo!"
                </p>
              </div>
            </div>
          </div>
          <div className='keen-slider__slide number-slide5'>
            <div className='container-slide'>
              <div className='container-profile'>
                <div className='content-profile'>
                  <div className='text-profile'>
                    <h3>Raquel Brito</h3>
                    <p>REGISTROS AKASHICOS - DENTISTA - ARCOS/MG</p>
                  </div>
                </div>
                <p className='profile-description'>
                  "Oi Valéria tudo bem? queria deixar aqui minha experiencia sobre a sessão, sou imensamente grata pela sessão que tive de
                  leitura de registros akashicos. Você me ajudou a ver as coisas sob uma nova perspectiva e me libertou de padrões
                  limitantes que me impediam de progredir. Senti uma sensação de leveza e alívio que não experimentava há muito tempo.
                  Agora, estou mais confiante em minha capacidade de manifestar a vida que desejo. Muito obrigada, você é uma terapeuta
                  maravilhosa."
                </p>
              </div>
            </div>
          </div>
          <div className='keen-slider__slide number-slide6'>
            <div className='container-slide'>
              <div className='container-profile'>
                <div className='content-profile'>
                  <div className='text-profile'>
                    <h3>Ingrid Oliveira</h3>
                    <p>TARÔ - EMPRESÁRIA - SÃO PAULO/SP</p>
                  </div>
                </div>
                <p className='profile-description'>
                  "Oi Valéria! Quero deixar meu depoimento aqui e expressar minha profunda gratidão pela sessão de leitura de tarô que tive
                  com você. Foi uma experiência profundamente reveladora, e fiquei impressionada com sua habilidade de interpretar as cartas
                  com tanta precisão. Me senti mais consciente dos padrões e desafios em minha vida, e agora estou mais confiante em minha
                  capacidade de navegar pelas incertezas do futuro. Obrigada por seu trabalho maravilhoso!"
                </p>
              </div>
            </div>
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow left onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()} disabled={currentSlide === 0} />

            <Arrow
              onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
              disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className='dots'>
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={'dot' + (currentSlide === idx ? ' active' : '')}
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function Arrow(props: { disabled: boolean; left?: boolean; onClick: (e: any) => void }) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left ? 'arrow--left' : 'arrow--right'} ${disabeld}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      {props.left && <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />}
      {!props.left && <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />}
    </svg>
  );
}
