using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Linq;
using Xmlprocessor.Models;

namespace Xmlprocessor.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileUploadController : ControllerBase
    {
        [HttpPost]
        public async Task<string> ReadFile(IFormFile file)
        {
            
            List<Asset> assets1 = new List<Asset>();
           
            


            Segregate seg = new Segregate();
            XmlDocument doc =await seg.PrepareXML(file);
            assets1=seg.PrepareAssets( doc,"Equipment");
            assets1.AddRange(seg.PrepareAssets(doc, "PipingNetworkSystem"));
            assets1.AddRange(seg.PrepareAssets(doc, "ProcessInstrumentationFunction"));
           
            string json = JsonConvert.SerializeObject(assets1);
            return json;
           
        }





    }

    







}


        

     



