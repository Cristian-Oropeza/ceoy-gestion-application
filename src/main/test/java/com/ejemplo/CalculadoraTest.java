package com.ejemplo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

public class CalculadoraTest {
    @Test
    public void testRestar() {
        Calculadora calculadora = new Calculadora();

        assertEquals(5, calculadora.restar(10, 5));
        assertEquals(-1, calculadora.restar(2, 3));
        assertEquals(0, calculadora.restar(3, 3));
    }
}