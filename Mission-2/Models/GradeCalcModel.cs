using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;


// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Mission_2.Models
{
    public class GradeCalcModel
    {
        // GET: /<controller>/

            [Required]
            [Range(0, 100)]
            public int assignment { get; set; }
            
            [Required]
            [Range(0, 100)]
            public int project { get; set; }
            
            [Required]
            [Range(0, 100)]
            public int group { get; set; }
            
            [Required]
            [Range(0, 100)]
            public int quiz { get; set; }
            
            [Required]
            [Range(0, 100)]
            public int exam { get; set; }
            
            [Required]
            [Range(0, 100)] 
            public int intex { get; set; }
        }
        
    }


