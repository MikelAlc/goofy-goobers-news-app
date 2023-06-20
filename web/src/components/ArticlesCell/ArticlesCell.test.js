import { render } from '@redwoodjs/testing/web'
import { Loading, Empty, Failure, Success } from './ArticlesCell'
import { standard } from './ArticlesCell.mock'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//        https://redwoodjs.com/docs/testing#testing-cells
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('ArticlesCell', () => {
  it('renders Loading successfully', () => {
    expect(() => {
      render(<Loading />)
    }).not.toThrow()
  })

  it('renders Empty successfully', async () => {
    expect(() => {
      render(<Empty />)
    }).not.toThrow()
  })

  it('renders Failure successfully', async () => {
    expect(() => {
      render(<Failure error={new Error('Oh no')} />)
    }).not.toThrow()
  })

  // When you're ready to test the actual output of your component render
  // you could test that, for example, certain text is present:
  //
  // 1. import { screen } from '@redwoodjs/testing/web'
  // 2. Add test: expect(screen.getByText('Hello, world')).toBeInTheDocument()

  it('renders Success successfully', async () => {

    const output={
      "totalResults":38,
      "articles":[
        {"source":{"id":"cnn","name":"CNN"},"author":"Nouran Salahieh","title":"Investigators are searching for suspects in the mass shooting at a Juneteenth celebration in Willowbrook, Illinois, that left 1 dead and at least 22 hurt - CNN","description":"Investigators are searching for an unknown number of suspects after a mass shooting at a Juneteenth celebration in Willowbrook, Illinois, Sunday that killed one person and injured at least 22 others on what was meant to be a joyous occasion.","url":"https://www.cnn.com/2023/06/19/us/willowbrook-illinois-juneteenth-shooting/index.html","urlToImage":"https://media.cnn.com/api/v1/images/stellar/prod/230619050632-05-willowbrook-illinois-party-shooting.jpg?c=16x9&q=w_800,c_fill","publishedAt":"2023-06-19T07:28:00Z","content":"Investigators are searching for an unknown number of suspects after a mass shooting at a Juneteenth celebration in Willowbrook, Illinois, Sunday that killed one person and injured at least 22 others … [+4602 chars]"},
        {"source":{"id":null,"name":"CNBC"},"author":"Silvia Amaro","title":"Rate cuts, hikes and pauses: The world's central banks just made very different decisions - CNBC","description":"Major central banks are taking very different approaches to monetary policy, as the global economy \"is no longer synchronized,\" an expert said.","url":"https://www.cnbc.com/2023/06/19/fed-ecb-boj-pboc-central-banks-monetary-policy-decision-are-diverging.html","urlToImage":"https://image.cnbcfm.com/api/v1/image/107258817-1687154306568-gettyimages-883202480-14339170.jpeg?v=1687156788&w=1920&h=1080","publishedAt":"2023-06-19T06:39:48Z","content":"From hawkish pauses to rate hikes and dovish tones, the world's biggest central banks last week struck very different tones on monetary policy.\r\nThe European Central Bank on Thursday hiked rates and … [+3428 chars]"},
        {"source":{"id":null,"name":"Africanews English"},"author":null,"title":"President Ramaphosa tells 'adamant' Putin 'the war must end' in Ukraine - Africanews English","description":"Putin reiterated his position that Ukraine and its Western allies had started the conflict long before Russia sent its armed forces over the border in February last year, something they deny.","url":"http://www.africanews.com/2023/06/18/president-ramaphosa-tells-adamant-putin-the-war-must-end-in-ukraine/","urlToImage":"https://static.euronews.com/articles/stories/07/68/47/30/1024x538_cmsv2_9ef5b595-5d7b-5d60-987d-bd0b3d4adace-7684730.jpg","publishedAt":"2023-06-19T06:17:19Z","content":"South African President Cyril Ramaphosa, who is in Russia as part of a peace-seeking delegation, on Saturday, told his Russian counterpart Vladimir Putin that the conflict in Ukraine had to stop.\r\n\"T… [+4105 chars]"}
      ]
    }



    expect(() => {
      render(<Success output={output} />)
    }).not.toThrow()
  })
})
