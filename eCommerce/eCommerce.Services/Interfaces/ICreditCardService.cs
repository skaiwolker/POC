﻿using eCommerce.Domain.DTOs;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace eCommerce.Services.Interfaces
{
    public interface ICreditCardService
    {
        Task<IEnumerable<CreditCardDTO>> GetCreditCards();

        Task<CreditCardDTO> GetCreditCardById(int id);

        Task AddCreditCard(CreditCardDTO creditCard);

        Task UpdateCreditCard(CreditCardDTO creditCard);

        Task<bool> RemoveCreditCard(int id);
    }
}
