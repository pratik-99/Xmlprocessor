using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using Xmlprocessor.Controllers;

namespace Xmlprocessor
{
    public class Segregate
    {
        public List<Asset> PrepareAssets(XmlDocument doc,string instru)
        {



            List<Asset> lst = new List<Asset>();
            //XmlDocument doc = new XmlDocument();
            XmlNodeList equiplist = doc.SelectNodes(string.Format("/PlantModel/{0}",instru));
            foreach (XmlNode xn in equiplist)
            {


                Asset instance = new Asset();
                instance.AssetId = xn.Attributes[0].Value;
                instance.Name = xn.Attributes[1].Value;
                instance.Description = xn.Name;
                instance.Attributes = new List<AssetAttribute>();

                XmlNodeList nwequiplist = doc.SelectNodes(string.Format("/PlantModel/{0}/GenericAttributes/GenericAttribute",instru));

                foreach (XmlNode jn in nwequiplist)
                {
                    AssetAttribute attribute = new AssetAttribute();
                    attribute.Name = jn.Attributes[0].Value;
                    attribute.Value = jn.Attributes[1].Value;
                    attribute.DataType = jn.Attributes[2].Value;
                    instance.Attributes.Add(attribute);

                }

                lst.Add(instance);
                
            }
            return lst;

        }
       public async Task<XmlDocument> PrepareXML(IFormFile file)
        {
            StringBuilder result = new StringBuilder();
            using (StreamReader reader = new StreamReader(file.OpenReadStream()))
            {
                while (reader.Peek() >= 0)
                    result.AppendLine(await reader.ReadLineAsync());
            }
            XmlDocument doc = new XmlDocument();
            try
            {
                doc.LoadXml(result.ToString());
                XmlElement root = doc.DocumentElement;
            }


            catch (Exception e)
            {
                var exc = e;
            }
            return doc;
        }
    }
}
