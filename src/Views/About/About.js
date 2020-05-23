import React from 'react';
import { Link } from 'react-router-dom';
import AboutClass from './About.module.css';

function About() {
  return (
    <div className="fadeInEffect">
      <div style={{ background: '#f3f1f1' }}>
        <section>
          <div className="row clr-margin">
            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12 my-3 mx-auto">
              <div className={AboutClass.aboutPage}>
                <h1 className={AboutClass.heading}>About Us</h1>
                <p className={AboutClass.description}>
                  Geo Child is the world’s fastest growing, digital cross platform magazine. Based
                  in National Capital Region, we have an ambitious plan to reach every school on
                  this planet.
                </p>
                <p className={AboutClass.description}>
                  Our success story started in Dec. 2018 when Indian Council for Journalism and
                  Juvenile Research (ICJJR) launched a print version of Geo Child. ‘Geo Child’ print
                  boasts itself as India’s first magazine on child rights and psychology. It is now,
                  India’s largest circulated and the most read publication.
                </p>
                <p className={AboutClass.description}>
                  It is now time to take a big step ahead. We all know that we are in the times,
                  when digital consumption is growing at a non-stoppable rate and the screens
                  (television, computer, tablet and mobiles) have become the inseparable part of our
                  lives. While screens provide easily accessible and ready to consume content on a
                  click, it is the challenge itself to find the ‘right one’ for our children.
                </p>
                <p className={AboutClass.description}>
                  We, the ICJJR took this problem as test and an opportunity and decided to offer
                  ‘best’ curated content (text and multimedia) for our existing and potential
                  readers. We are now available on mobile, book readers, tablets and on your
                  computer screens with our perfectionist approach. Our Specialise team of media
                  professionals, experts and consultants from various walks of life, we are damn
                  sure that we can produce what no one can.
                </p>
                <p className={AboutClass.description}>
                  Although, we have primary focus on students, our magazine offers lot of
                  interesting and knowledgeable things for teachers, parents mentors and the
                  teenagers too. At Geo Child digital, we are more engaging, responsive and
                  interactive. While subscribing for our content, you can also make suggestions,
                  submit your own content and participate in our competitions.
                </p>
                <p className={AboutClass.description}>
                  It’s your own platform, so use it accordingly. We try to read and respond every
                  communication made to us. Connect us by filling the contact form below, or
                  directly mail on <Link to="#">mygeochild@gmail.com</Link>
                </p>
                <p className={AboutClass.thnaksQuotes}>Happy Reading and Healthy Life to You...!</p>
              </div>
              <div className={AboutClass.clr}></div>
              <div className={AboutClass.aboutPage}>
                <h1 className={AboutClass.heading}>एक परिचय . . . GeoChild बारे में</h1>
                <p className={AboutClass.description}>
                  प्यारे बच्चों, हमारी “GeoChild” अब दुनिया की तेज़ी से बढ़ती हुई एक डिजिटल प्लेटफ़ॉर्म
                  मैगजीन है। यह भारत की पहली ऐसी पत्रिका हैं जो कि बच्चों के अधिकारों और बाल
                  मनोविज्ञान पर आधारित हैं। इस समय हमारे पास महत्वाकांक्षी योजना होने से हम हर एक
                  स्कूल व बच्चे तक पहुंचने का प्रयास कर सकते हैं।
                </p>
                <p className={AboutClass.description}>
                  दिसम्बर 2018 में भारतीय पत्रकारिता एवं किशोर अनुसन्धान परिषद् (Indian Council For
                  Journalism And Juvenile Research) ने ‘GeoChild’ का प्रिंट संस्करण लॉन्च किया और
                  यहीं से हमारी सफलता की कहानी शुरू हुई। आज यह बच्चों और अभिभावकों द्वारा सबसे
                  ज़्यादा पसंद किया जाने वाला प्रकाशन है।
                </p>
                <p className={AboutClass.description}>
                  बच्चों, यह तो आप सभी जानते ही हैं कि हम सब डिजिटल युग में जीवन व्यतीत कर रहे हैं।
                  अपने चारों तरफ हम टेलीविज़न, कंप्यूटर, टैबलेट और मोबाइल से घिरे हुए हैं। अब ये सारी
                  चीज़े हमारे जीवन का एक अभिन्न हिस्सा बन चुकी हैं। जिनके बिना हम जीने की कल्पना भी
                  नहीं कर सकते क्योंकि इन सब गैजेट्स पर इन्टरनेट के माध्यम से एक क्लिक करते ही सभी
                  तरह की पाठ्य सामग्री आसानी से उपलब्ध हो जाती हैं।
                </p>
                <p className={AboutClass.description}>
                  अब, ICJJR ने पाठकों के लिए ‘सर्वोत्तम ऑनलाइन पाठ्य सामग्री’ उपलब्ध कराने का निर्णय
                  लिया है। हमारे मीडिया विशेषज्ञों और विभिन्न सलाहकारों की विशेष टीम के सहयोग से अब
                  हम आपके मोबाइल, कंप्यूटर स्क्रीन और टैबलेट पर भी उपलब्ध हैं और आप एक क्लिक से ही
                  हमारी मैग्जीन को देश-विदेश में पढ़ सकते हैं।
                </p>
                <p className={AboutClass.description}>
                  GeoChild Digital में हमारी पत्रिका आपको और अधिक रोचक एवं आकर्षक लगेगी। हमारा
                  कर्तव्य है कि हम GeoChild मैग्जीन में ऐसी सामग्री प्रस्तुत करें जो कि बच्चों के
                  साथ-साथ शिक्षकों, अभिभावकों और किशोरों के लिए ज्ञानवर्धक, शिक्षाप्रद और मनोरंजक
                  हो।
                </p>
                <p className={AboutClass.description}>
                  GeoChild की सदस्यता लेते समय आप हमें अपने महत्वपूर्ण सुझाव और उसे बेहतर बनाने के
                  लिए अपने विचार भी दे सकते हैं क्योंकि ये आपकी अपनी पत्रिका है। इसी के साथ हमारे
                  द्वारा आयोजित विभिन्न प्रतियोगिताओं में भी आप सीधे भाग ले सकते हैं। हम आपके हर
                  प्रश्न का जवाब देने के लिए सदैव तत्पर हैं।
                </p>
                <p className={AboutClass.description}>
                  Feedback फार्म पर आप हमसे सीधे जुड़ सकते हैं या मेल के द्वारा भी हमसे संपर्क कर
                  सकते हैं। हमारा मेल आईडी हैं: <Link to="#">geochildweb@gmail.com</Link>
                </p>
                <p className={AboutClass.thnaksQuotes}>
                  प्यारे बच्चों जागरूक बनें, शिक्षित बनें, स्वस्थ रहें और सुरक्षित रहे!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
