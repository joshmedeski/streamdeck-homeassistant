import { Action } from '@/modules/homeassistant/actions/action'

/**
 * ServiceAction, extending Action, facilitates interactions with HomeAssistant services.
 */
export class ServiceAction extends Action {
  /**
   * Constructs a ServiceAction instance.
   * @param {string} domain - Service domain, must be a non-empty string.
   * @param {string} service - Service name, must be a non-empty string.
   * @param {Array} [entity_id=[]] - Target entity IDs array.
   * @param {Object} [serviceData={}] - Additional service data.
   * @throws {Error} if 'domain' or 'service' are empty or not strings.
   * @throws {TypeError} if 'entity_id' is not an array or 'serviceData' is not an object.
   */
  constructor(domain, service, entity_id, serviceData) {
    super()

    if (typeof domain !== 'string' || !domain.trim()) {
      throw new Error('Domain must be a non-empty string')
    }
    if (typeof service !== 'string' || !service.trim()) {
      throw new Error('Service must be a non-empty string')
    }
    if (!Array.isArray(entity_id)) {
      throw new TypeError('entity_id must be an array')
    }
    if (typeof serviceData !== 'object' || serviceData === null) {
      throw new TypeError('serviceData must be an object')
    }

    this.service = `${domain}.${service}`
    this.data = serviceData
    this.target = { entity_id: entity_id }
  }
}
