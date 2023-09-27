import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/*package com.example.demo.controller;

public class PaymentController {

}
*/
@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/process")
    public ResponseEntity<PaymentResult> processPayment(@RequestBody PaymentRequest paymentRequest) {
        PaymentResult paymentResult = paymentService.processPayment(paymentRequest);
        if (paymentResult.isSuccess()) {
            return new ResponseEntity<>(paymentResult, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(paymentResult, HttpStatus.BAD_REQUEST);
        }
    }
}
