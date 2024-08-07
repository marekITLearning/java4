//
// This file was generated by the Eclipse Implementation of JAXB, v3.0.2 
// See https://eclipse-ee4j.github.io/jaxb-ri 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2024.07.16 at 09:32:18 PM CEST 
//


package sk.itlearning.wf.xml;

import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import jakarta.xml.bind.annotation.XmlElement;
import jakarta.xml.bind.annotation.XmlType;


/**
 * <p>Java class for uv complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="uv"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="uvi_clear" type="{}unit_value"/&gt;
 *         &lt;element name="uvi_partly_cloudy" type="{}unit_value"/&gt;
 *         &lt;element name="uvi_cloudy" type="{}unit_value"/&gt;
 *         &lt;element name="uvi_forecast" type="{}unit_value"/&gt;
 *         &lt;element name="ozon" type="{}unit_value"/&gt;
 *         &lt;element name="snowcover" type="{}unit_value"/&gt;
 *         &lt;element name="cloudcover" type="{}unit_value"/&gt;
 *         &lt;element name="albedo" type="{}unit_value"/&gt;
 *         &lt;element name="solar_zenith" type="{}unit_value"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "uv", propOrder = {
    "uviClear",
    "uviPartlyCloudy",
    "uviCloudy",
    "uviForecast",
    "ozon",
    "snowcover",
    "cloudcover",
    "albedo",
    "solarZenith"
})
public class Uv {

    @XmlElement(name = "uvi_clear", required = true)
    protected UnitValue uviClear;
    @XmlElement(name = "uvi_partly_cloudy", required = true)
    protected UnitValue uviPartlyCloudy;
    @XmlElement(name = "uvi_cloudy", required = true)
    protected UnitValue uviCloudy;
    @XmlElement(name = "uvi_forecast", required = true)
    protected UnitValue uviForecast;
    @XmlElement(required = true)
    protected UnitValue ozon;
    @XmlElement(required = true)
    protected UnitValue snowcover;
    @XmlElement(required = true)
    protected UnitValue cloudcover;
    @XmlElement(required = true)
    protected UnitValue albedo;
    @XmlElement(name = "solar_zenith", required = true)
    protected UnitValue solarZenith;

    /**
     * Gets the value of the uviClear property.
     * 
     * @return
     *     possible object is
     *     {@link UnitValue }
     *     
     */
    public UnitValue getUviClear() {
        return uviClear;
    }

    /**
     * Sets the value of the uviClear property.
     * 
     * @param value
     *     allowed object is
     *     {@link UnitValue }
     *     
     */
    public void setUviClear(UnitValue value) {
        this.uviClear = value;
    }

    /**
     * Gets the value of the uviPartlyCloudy property.
     * 
     * @return
     *     possible object is
     *     {@link UnitValue }
     *     
     */
    public UnitValue getUviPartlyCloudy() {
        return uviPartlyCloudy;
    }

    /**
     * Sets the value of the uviPartlyCloudy property.
     * 
     * @param value
     *     allowed object is
     *     {@link UnitValue }
     *     
     */
    public void setUviPartlyCloudy(UnitValue value) {
        this.uviPartlyCloudy = value;
    }

    /**
     * Gets the value of the uviCloudy property.
     * 
     * @return
     *     possible object is
     *     {@link UnitValue }
     *     
     */
    public UnitValue getUviCloudy() {
        return uviCloudy;
    }

    /**
     * Sets the value of the uviCloudy property.
     * 
     * @param value
     *     allowed object is
     *     {@link UnitValue }
     *     
     */
    public void setUviCloudy(UnitValue value) {
        this.uviCloudy = value;
    }

    /**
     * Gets the value of the uviForecast property.
     * 
     * @return
     *     possible object is
     *     {@link UnitValue }
     *     
     */
    public UnitValue getUviForecast() {
        return uviForecast;
    }

    /**
     * Sets the value of the uviForecast property.
     * 
     * @param value
     *     allowed object is
     *     {@link UnitValue }
     *     
     */
    public void setUviForecast(UnitValue value) {
        this.uviForecast = value;
    }

    /**
     * Gets the value of the ozon property.
     * 
     * @return
     *     possible object is
     *     {@link UnitValue }
     *     
     */
    public UnitValue getOzon() {
        return ozon;
    }

    /**
     * Sets the value of the ozon property.
     * 
     * @param value
     *     allowed object is
     *     {@link UnitValue }
     *     
     */
    public void setOzon(UnitValue value) {
        this.ozon = value;
    }

    /**
     * Gets the value of the snowcover property.
     * 
     * @return
     *     possible object is
     *     {@link UnitValue }
     *     
     */
    public UnitValue getSnowcover() {
        return snowcover;
    }

    /**
     * Sets the value of the snowcover property.
     * 
     * @param value
     *     allowed object is
     *     {@link UnitValue }
     *     
     */
    public void setSnowcover(UnitValue value) {
        this.snowcover = value;
    }

    /**
     * Gets the value of the cloudcover property.
     * 
     * @return
     *     possible object is
     *     {@link UnitValue }
     *     
     */
    public UnitValue getCloudcover() {
        return cloudcover;
    }

    /**
     * Sets the value of the cloudcover property.
     * 
     * @param value
     *     allowed object is
     *     {@link UnitValue }
     *     
     */
    public void setCloudcover(UnitValue value) {
        this.cloudcover = value;
    }

    /**
     * Gets the value of the albedo property.
     * 
     * @return
     *     possible object is
     *     {@link UnitValue }
     *     
     */
    public UnitValue getAlbedo() {
        return albedo;
    }

    /**
     * Sets the value of the albedo property.
     * 
     * @param value
     *     allowed object is
     *     {@link UnitValue }
     *     
     */
    public void setAlbedo(UnitValue value) {
        this.albedo = value;
    }

    /**
     * Gets the value of the solarZenith property.
     * 
     * @return
     *     possible object is
     *     {@link UnitValue }
     *     
     */
    public UnitValue getSolarZenith() {
        return solarZenith;
    }

    /**
     * Sets the value of the solarZenith property.
     * 
     * @param value
     *     allowed object is
     *     {@link UnitValue }
     *     
     */
    public void setSolarZenith(UnitValue value) {
        this.solarZenith = value;
    }

}
