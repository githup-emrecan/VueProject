 import {mount} from '@vue/test-utils'
 import form from '../components/AdresandPrice.vue'

 test('submit order'),async () => {
     const wrapper = mount (form)

        const name='emre can'
        const   surname='KALDI',
        const   tc='58399514004',
        const   email='emre.c.kaldi@gmail.com',
        const    tel='5433697523',
        const   adres='deneme',
        const    pkod=34000,
        const     il='iladi1',
        const    ilce='ilceadi2'

     await wrapper.find('input[type=email]').setValue(email)
     await wrapper.find('input[type=text]').setValue(name)
     await wrapper.find('input[type=soyad]').setValue(surname)
     await wrapper.find('input[type=texarea]').setValue(adres)
     await wrapper.find('input[type=text]').setValue(tc)
     await wrapper.find('select').setValue(il)
     await wrapper.find('select').setValue(ilce)
     await wrapper.find('input[type=text]').setValue(pkod)

     await wrapper.find('.submit').trigger('click')
     expect(wrapper.emitted('submit')[0][0]).toBe(
         email,
         name,
         surname,
         tc,
         tel,
         adres,
         il,
         ilce,
         pkod,
     )




 }